import React from 'react'
import getWikiResults from '../lib/getWikiResults'
import Item from './components/Item'

type Props = {
    params: {
        searchTerm:string
    }
}

export async function generateMetadata({ params:{searchTerm} }:Props) {
    const displayTerm = searchTerm.replaceAll("%20"," ");
    return {
      title: `${displayTerm} Search Results`,
    }
    }



export default async function SearchResults({ params: { searchTerm } }: Props) {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const results: Result[] | undefined = data?.query?.pages
    const displayTerm = searchTerm.replaceAll("%20"," ");

    const content = (
        <main className="bg-slate-200 mx-auto w-full py-1 min-h-screen">
            {results
                ?
                <> 
                <h1 className='text-3xl font-semibold mx-2 px-2'>Search Results for: {displayTerm}</h1>
                    {Object.values(results).map(result => {
                    return <Item key={result.pageid} result={result} />
                })}
                </>
                : <h2 className="p-2 text-xl">{`${displayTerm} Not Found`}</h2>
            }
        </main>
    )

    return content
}