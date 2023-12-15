import Link from "next/link";

type Props = {
  result: Result;
};

export default function Item({ result }: Props) {
  const content = (
    <article className="m-4 max-w-full bg-slate-400 px-2 h-60 rounded-lg">
      <div className="flex gap-2 h-full ">
        <div className="h-full w-2/6 flex items-center">
          <img
            src={'https://cdn2.downdetector.com/static/uploads/c/300/f5868/wikipedia-logo_1.png'
            }
            alt={result.title}
            loading="lazy"
            className="h-5/6"
          />
        </div>
        <div className="flex flex-col items-start w-full h-full py-4">
          <h2>
            <Link
              href={`https://en.wikipedia.org/?curid=${result.pageid}`}
              target="_blank"
              className="text-xl font-bold underline"
            >
              {result.title}
            </Link>
          </h2>
          <p>{result.extract}</p>
        </div>
      </div>
    </article>
  );

  return content;
}
