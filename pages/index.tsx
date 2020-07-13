import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

//import './style/main.css';
import Head from 'next/head'

const postsDirectory = path.join(process.cwd(), 'posts')



export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Nasr Maswood</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="title">
                    Nasr Maswood
                </h1>
            </main>
        </div>
    )
}
