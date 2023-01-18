import Head from "next/head";
import { Fragment } from "react";
import { format } from "date-fns";
import Layout from "@/components/Layout";
import Custom404 from "../404";
import emoticons from "@/emoticons/emoticons.json";
import recommended from "@/emoticons/recommended.json";
import { GetServerSideProps, NextPage } from "next";

const Index: NextPage<{
  emoticon?: {
    id: string;
    title: string;
    authors: { id: string; name: string }[];
    image: { id: string; filename: string; imageType: string };
    date: number;
    default?: boolean;
    official?: boolean;
  };
  images?: { id: string; name: string; filename: string; imageType: string }[];
}> = ({ emoticon, images }) => {
  console.log(emoticon?.title);

  if (!emoticon || !images) return <Custom404 />;

  return (
    <>
      <Head>
        <title>{`${emoticon.title} | Dutmoticon 스토어`}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="엔트리에서 더 많은 스티커를 사용하세요" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={emoticon.title} />
        <meta property="og:site_name" content="Dutmoticon 스토어" />
        <meta property="og:description" content="엔트리에서 더 많은 스티커를 사용하세요" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>
      <Layout>
        <section className="max-w-7xl mx-auto px-10 0.5md:px-6 py-8 flex h-max w-full">
          <div className="flex gap-x-8 lg:gap-x-6 gap-y-4 0.5lg:flex-col w-full">
            <div className="flex gap-x-8 lg:gap-x-6 w-full">
              <div className="aspect-square flex items-center justify-center h-max flex-shrink-0 border border-neutral-100 rounded-xl shadow-md">
                <img
                  src={`https://playentry.org/uploads/${emoticon.image.filename.slice(
                    0,
                    2
                  )}/${emoticon.image.filename.slice(2, 4)}/${emoticon.image.filename}.${emoticon.image.imageType}`}
                  className="h-20 lg:h-16"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-[40px] lg:text-[34px] 0.5lg:text-3xl font-semibold leading-10 break-keep">
                  {emoticon.title}
                </h2>
                <div className="text-lg lg:text-[17px] font-semibold leading-5 mt-0.5 break-keep">
                  {emoticon.authors.map((author, i) => {
                    return (
                      <Fragment key={author.id}>
                        <a
                          href={`https://playentry.org/profile/${author.id}`}
                          target="_blank"
                          className="text-brand"
                          title={author.name}
                        >
                          {author.name}
                        </a>
                        {emoticon.authors.length - 1 !== i && ", "}
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex items-start ml-auto 0.5md:w-full">
              <button
                id="add-emoticon"
                className="text-lg lg:text-[17px] font-semibold px-6 py-3 mt-4 0.5lg:mt-0 leading-4 rounded-lg w-max 0.5md:w-full bg-brand disabled:bg-neutral-400 cursor-pointer disabled:cursor-not-allowed text-white shadow-md"
                data-id={emoticon.id}
                data-title={emoticon.title}
                disabled
              >
                Dutmoticon에 추가
              </button>
            </div>
          </div>
        </section>
        <section className="bg-neutral-50">
          <div className="max-w-6xl mx-auto px-10 0.5md:px-6 py-10 grid grid-cols-6 0.5lg:grid-cols-4 sm:grid-cols-3 gap-x-16 lg:gap-x-8 0.5lg:gap-x-16 0.5md:gap-x-8 sm:gap-x-16 xs:gap-x-8 gap-y-12 h-full">
            {images.map((image) => {
              return (
                <img
                  src={`https://playentry.org/uploads/${image.filename.slice(0, 2)}/${image.filename.slice(2, 4)}/${
                    image.filename
                  }.${image.imageType}`}
                  className="drop-shadow-xl"
                  title={image.name.slice(0, (image.imageType.length + 1) * -1)}
                  key={image.id}
                />
              );
            })}
          </div>
        </section>
        <section className="max-w-7xl w-full mx-auto px-10 0.5md:px-6 mb-12 flex flex-col">
          <h2 className="text-2xl font-semibold mt-8">상세 정보</h2>
          <table className="border border-neutral-50 w-full max-w-full rounded-lg shadow-md mt-1">
            <tbody>
              <tr className="border-r border-r-neutral-100">
                <th className="text-center text-[17px] font-medium 0.5md:text-base 0.5md:font-medium border-b border-b-neutral-100 bg-neutral-50 px-4 py-1.5 0.5md:px-3 whitespace-nowrap w-0">
                  이름
                </th>
                <td className="text-[17px] font-medium 0.5md:text-base 0.5md:font-medium border-b border-b-neutral-100 px-4 py-1.5 0.5md:px-3">{emoticon.title}</td>
              </tr>
              <tr className="border-r border-r-neutral-100">
                <th className="text-center text-[17px] font-medium 0.5md:text-base 0.5md:font-medium border-b border-b-neutral-100 bg-neutral-50 px-4 py-1.5 0.5md:px-3 whitespace-nowrap w-0">
                  제작자
                </th>
                <td className="text-[17px] font-medium 0.5md:text-base 0.5md:font-medium border-b border-b-neutral-100 px-4 py-1.5 0.5md:px-3">
                  {emoticon.authors.map((author, i) => {
                    return (
                      <Fragment key={author.id}>
                        <a
                          href={`https://playentry.org/profile/${author.id}`}
                          target="_blank"
                          className="text-brand"
                          title={author.name}
                        >
                          {author.name}
                        </a>
                        {emoticon.authors.length - 1 !== i && ", "}
                      </Fragment>
                    );
                  })}
                </td>
              </tr>
              <tr className="border-r border-r-neutral-100">
                <th className="text-center text-[17px] font-medium 0.5md:text-base 0.5md:font-medium border-b border-b-neutral-100 bg-neutral-50 px-4 py-1.5 0.5md:px-3 whitespace-nowrap w-0">
                  업로드 날짜
                </th>
                <td className="text-[17px] font-medium 0.5md:text-base 0.5md:font-medium border-b border-b-neutral-100 px-4 py-1.5 0.5md:px-3">
                  {format(emoticon.date, "yyyy년 MM월 dd일 HH시 mm분")}
                </td>
              </tr>
              <tr className="border-r border-r-neutral-100">
                <th className="text-center text-[17px] font-medium 0.5md:text-base 0.5md:font-medium border-b border-b-neutral-100 bg-neutral-50 px-4 py-1.5 0.5md:px-3 whitespace-nowrap w-0">
                  이모티콘 개수
                </th>
                <td className="text-[17px] font-medium 0.5md:text-base 0.5md:font-medium border-b border-b-neutral-100 px-4 py-1.5 0.5md:px-3">{images.length}</td>
              </tr>
              <tr className="border-r border-r-neutral-100">
                <th className="text-center text-[17px] font-medium 0.5md:text-base 0.5md:font-medium bg-neutral-50 px-4 py-1.5 0.5md:px-3 whitespace-nowrap w-0">
                  태그
                </th>
                <td className="text-[17px] font-medium 0.5md:text-base 0.5md:font-medium px-4 py-1.5 0.5md:px-3 flex gap-x-1">
                  {!(emoticon.default || emoticon.official || recommended.includes(emoticon.id)) && "-"}
                  {emoticon.default && (
                    <div className="bg-pink-500 text-white text-sm flex items-center justify-center px-2 py-1 w-max rounded-full">
                      <span className="font-medium leading-4">기본</span>
                    </div>
                  )}
                  {emoticon.official && (
                    <div className="bg-emerald-500 text-white text-sm flex items-center justify-center px-2 py-1 w-max rounded-full">
                      <span className="font-medium leading-4">공식</span>
                    </div>
                  )}
                  {recommended.includes(emoticon.id) && (
                    <div className="bg-brand text-white text-sm flex items-center justify-center px-2 py-1 w-max rounded-full">
                      <span className="font-medium leading-4">추천</span>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const emoticon = emoticons.find((emoticon) => emoticon.id === id);

  if (!id || !emoticon) return { props: {} };
  else {
    const { default: images } = await import(`@/emoticons/${id}.json`);
    return { props: { emoticon, images } };
  }
};

export default Index;
