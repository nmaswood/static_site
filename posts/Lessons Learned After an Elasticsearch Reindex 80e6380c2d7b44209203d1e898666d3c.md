# Lessons Learned After an  Elasticsearch Reindex

I am an Elasticsearch newbie. There is no doubt I have much to learn and a long way to go. That being said, after a couple months using the tool I've  picked up a couple tips and tricks that I wish I knew when I first started using Elasticsearch.

# [Use An Alias](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-aliases.html)

Aliases are  pointers for indices. They serve as a layer of indirection that let you issue reads and writes to a location without really having to worry about how that index ( or indices ) change.

Aliases give you flexibility in changing and managing your indices. Even if you are not planning to perform a reindex in the future, they are light weight and are a nice thing to have up front. Adding them after the fact with a migration is possible ... but really why not just have them from the start?

# [Be Weary of Dynamic Field Mappings](https://www.elastic.co/guide/en/elasticsearch/reference/current/dynamic.html#dynamic)

By default Elasticsearch allows your index field mappings to change dynamically.

If your field mapping looks something like

```jsx
{
	name: {
		type: 'keyword'
    ...
  }
}
```

 And you post the following document that that index

```jsx
{
  name: "bob",
  is_right_handed: true,
  age: 21,
  foo: "bar'
}
```

Elasticsearch will try to guess the types and automatically create field mappings for the value posted. So your new field mapping will look something like.

```jsx
{
	name: {
		type: 'keyword'
    ...
  },
 is_right_handed: {
    type: bool
    ...
  },
  age: {
   type: number
  },
.... etc
}
```

This is not ideal for a couple reasons:

- Each additional field in your field mapping has a cost associated with it and you do not want a enormous out of control field mappings as this will bloat your cluster state.
- Mappings are immutable, so if you later you do not like the default field mapping provided with `foo` , too bad you are stuck with it and need to perform a reindex to change it.
- Without a strict schema you may post data into your index that you didn't intend to

## False or Strict

Instead in your field mappings I would specify `dynamic: false` which will ignore new fields or `dynamic: strict` which will throw an exception when new fields are present. 

Instead manually update the field mappings when you would like to insert new data. You might have to pay the cost of a `PUT` request, but in the long term I think it will make maintenance easier.

# Do not store large binary data in Elasticsearch if you can avoid it

At my company we  use the ingest-attachment plugin to strip text from pdfs and index the result. By default, these binary blobs are stored in your index and take quite a lot of space. This can increase the disk space of your cluster unnecessary, or more problematically make reindexes very difficult as you will quickly run out of memory when trying to move many of these at a time. 

If you use the ingest-attachment pipeline add a step to your pipeline that removes the binary data field