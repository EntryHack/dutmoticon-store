import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import { format, formatDistanceToNowStrict } from "date-fns";
import { ko } from "date-fns/locale";
import Layout from "@/components/Layout";
import emoticons from "@/emoticons/emoticons.json";
import recommended from "@/emoticons/recommended.json";

const Index = () => {
  return (
    <>
      <Head>
        <title>Dutmoticon 스토어</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="엔트리에서 더 많은 스티커를 사용하세요" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dutmoticon 스토어" />
        <meta name="twitter:title" content="Dutmoticon 스토어" />
        <meta property="og:site_name" content="Dutmoticon 스토어" />
        <meta property="og:description" content="엔트리에서 더 많은 스티커를 사용하세요" />
        <meta name="twitter:description" content="엔트리에서 더 많은 스티커를 사용하세요" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:src" content="/og-image.png" />
        <meta name="theme-color" content="#126fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>
      <Layout>
        <section className="bg-brand bg-top bg-[length:1600px] 0.5md:bg-[length:600px] bg-no-repeat bg-[url('/background.png')] 0.5md:bg-[url('/background-small.png')] w-full h-[600px] flex-shrink-0">
          <div className="max-w-7xl mx-auto px-10 0.5md:px-6 flex items-center h-full">
            <div className="max-w-4xl">
              <h1 className="text-5xl 0.5md:text-[42px] xs:text-4xl text-white font-semibold break-keep text-shadow">
                엔트리에서 더 많은 스티커를 사용하세요
              </h1>
              <p className="text-xl 0.5md:text-lg xs:text-base text-white/90 font-medium mt-4 word break-keep text-shadow">
                기본 제공 스티커만으로는 부족하셨나요? 누구나 Dutmoticon에 내가 만든 이모티콘을 올리고
                <sup>1)</sup>, 다른 사람의 이모티콘을 엔트리로 가져가 사용할<sup>2)</sup> 수 있어요. Dutmoticon으로
                개성을 표현해보세요.
              </p>
              <p className="text-sm xs:text-xs text-white/80 font-medium leading-5 mt-2 text-shadow">
                1) Dutmoticon에 공개 전 검수 절차가 진행됩니다.
                <br />
                2) Chrome/Firefox용 Dutmoticon 확장 프로그램/애드온 설치가 필요합니다.
              </p>
              <div className="flex xs:flex-col gap-3 mt-5">
                <Link
                  href="/install"
                  className="text-lg font-medium px-6 py-3 leading-4 rounded-lg bg-white/20 backdrop-blur-md text-white text-shadow shadow-md"
                >
                  Dutmoticon 설치하기
                </Link>
                <Link
                  href="/upload"
                  className="text-lg font-medium px-6 py-3 leading-4 rounded-lg bg-white/20 backdrop-blur-md text-white text-shadow shadow-md"
                >
                  내 이모티콘 올리기
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl w-full mx-auto px-10 0.5md:px-6 pb-2 flex flex-col">
          <h2 className="text-2xl font-semibold mt-8">추천 이모티콘</h2>
          <div className="mt-2 grid grid-cols-5 0.5xl:grid-cols-4 0.5lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 w-full gap-4">
            {recommended
              .map((id) => emoticons.find((emoticon) => emoticon.id === id)!)
              .map((emoticon) => {
                return (
                  <Link
                    href={`/emoticon/${emoticon.id}`}
                    className="flex flex-col rounded-xl overflow-hidden border border-neutral-100 shadow-md hover:transform hover:-translate-y-1.5 transition-transform duration-300"
                    key={emoticon.id}
                  >
                    <div className="absolute pt-1.5 pl-1.5 flex gap-x-1">
                      {emoticon.default && (
                        <div className="bg-pink-500 text-white text-sm flex items-center justify-center px-2 py-1 rounded-full">
                          <span className="font-medium leading-4">기본</span>
                        </div>
                      )}
                      {emoticon.official && (
                        <div className="bg-emerald-500 text-white text-sm flex items-center justify-center px-2 py-1 rounded-full">
                          <span className="font-medium leading-4">공식</span>
                        </div>
                      )}
                      {recommended.includes(emoticon.id) && (
                        <div className="bg-brand text-white text-sm flex items-center justify-center px-2 py-1 rounded-full">
                          <span className="font-medium leading-4">추천</span>
                        </div>
                      )}
                    </div>
                    <img
                      src={`https://playentry.org/uploads/${emoticon.image.filename.slice(
                        0,
                        2
                      )}/${emoticon.image.filename.slice(2, 4)}/${emoticon.image.filename}.${emoticon.image.imageType}`}
                      className="border-b border-b-neutral-100 aspect-video"
                    />
                    <div className="flex flex-col justify-center w-full min-w-0 px-4 py-3">
                      <h3
                        className="text-lg font-semibold leading-5 whitespace-nowrap text-ellipsis overflow-hidden"
                        title={emoticon.title}
                      >
                        {emoticon.title}
                      </h3>
                      <span className="font-medium leading-[18px] mt-[3px] whitespace-nowrap text-ellipsis overflow-hidden">
                        {emoticon.authors.map((author, i) => {
                          return (
                            <Fragment key={author.id}>
                              <span className="text-brand" title={author.name}>
                                {author.name}
                              </span>
                              {emoticon.authors.length - 1 !== i && ", "}
                            </Fragment>
                          );
                        })}
                      </span>
                      <span
                        className="text-neutral-500 text-sm font-medium leading-4 mt-0.5 whitespace-nowrap text-ellipsis overflow-hidden"
                        title={format(emoticon.date, "yyyy년 MM월 dd일 HH시 mm분")}
                      >
                        {formatDistanceToNowStrict(emoticon.date, { locale: ko })} 전
                      </span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </section>
        <section className="max-w-7xl w-full mx-auto px-10 0.5md:px-6 pb-2 mb-8 flex flex-col">
          <h2 className="text-2xl font-semibold mt-8">모든 이모티콘</h2>
          <div className="mt-2 grid grid-cols-5 0.5xl:grid-cols-4 0.5lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 w-full gap-4">
            {[...emoticons].reverse().map((emoticon) => {
              return (
                <Link
                  href={`/emoticon/${emoticon.id}`}
                  className="flex flex-col rounded-xl overflow-hidden border border-neutral-100 shadow-md hover:transform hover:-translate-y-1.5 transition-transform duration-300"
                  key={emoticon.id}
                >
                  <div className="absolute pt-1.5 pl-1.5 flex gap-x-1">
                    {emoticon.default && (
                      <div className="bg-pink-500 text-white text-sm flex items-center justify-center px-2 py-1 rounded-full">
                        <span className="font-medium leading-4">기본</span>
                      </div>
                    )}
                    {emoticon.official && (
                      <div className="bg-emerald-500 text-white text-sm flex items-center justify-center px-2 py-1 rounded-full">
                        <span className="font-medium leading-4">공식</span>
                      </div>
                    )}
                    {recommended.includes(emoticon.id) && (
                      <div className="bg-brand text-white text-sm flex items-center justify-center px-2 py-1 rounded-full">
                        <span className="font-medium leading-4">추천</span>
                      </div>
                    )}
                  </div>
                  <img
                    src={`https://playentry.org/uploads/${emoticon.image.filename.slice(
                      0,
                      2
                    )}/${emoticon.image.filename.slice(2, 4)}/${emoticon.image.filename}.${emoticon.image.imageType}`}
                    className="border-b border-b-neutral-100 aspect-video"
                  />
                  <div className="flex flex-col justify-center w-full min-w-0 px-4 py-3">
                    <h3
                      className="text-lg font-semibold leading-5 whitespace-nowrap text-ellipsis overflow-hidden"
                      title={emoticon.title}
                    >
                      {emoticon.title}
                    </h3>
                    <span className="font-medium leading-[18px] mt-[3px] whitespace-nowrap text-ellipsis overflow-hidden">
                      {emoticon.authors.map((author, i) => {
                        return (
                          <Fragment key={author.id}>
                            <span className="text-brand" title={author.name}>
                              {author.name}
                            </span>
                            {emoticon.authors.length - 1 !== i && ", "}
                          </Fragment>
                        );
                      })}
                    </span>
                    <span
                      className="text-neutral-500 text-sm font-medium leading-4 mt-0.5 whitespace-nowrap text-ellipsis overflow-hidden"
                      title={format(emoticon.date, "yyyy년 MM월 dd일 HH시 mm분")}
                    >
                      {formatDistanceToNowStrict(emoticon.date, { locale: ko })} 전
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
