"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setgenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setShorturl("")
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }
    return (
        <div className='mx-auto max-w-lg bg-rose-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate Your Short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input type="text"
                    value={url}
                    className='px-4 py-2 focus:outline-red-600 rounded-md'
                    placeholder='Enter your URL'
                    onChange={e => { seturl(e.target.value) }} />

                <input type="text"
                    value={shorturl}
                    className='px-4 py-2 focus:outline-red-600 rounded-md'
                    placeholder='Enter your preferred short URL text'
                    onChange={e => { setShorturl(e.target.value) }} />

                <button onClick={generate} className='bg-rose-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white my-3'>Generate</button>
            </div>

            {generated && <><span className='font-bold text-lg'>Your Link:</span> <code> <Link target='_blank' href={generated}>{generated}</Link>
            </code></>}

        </div>
    )
}

export default shorten
