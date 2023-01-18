import Head from "next/head";
import Link from "next/link";
import { Fragment, useEffect, useMemo, useState } from "react";
import { format, formatDistanceToNowStrict } from "date-fns";
import { ko } from "date-fns/locale";
import Layout from "@/components/Layout";
import emoticons from "@/emoticons/emoticons.json";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const emoticon = useMemo(() => emoticons.find((emoticon) => emoticon.id === id), [id]);
  const [images, setImages] = useState<{ id: string; name: string; filename: string; imageType: string }[]>([]);

  useEffect(() => {
    if (!id) return;
    import(`@/emoticons/${id}.json`).then((res) => void setImages(res.default));
  }, [id]);

  if (!emoticon) return <div>404</div>;

  return (
    <>
      <Head>
        <title>Dutmoticon 스토어</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="엔트리에서 더 많은 스티커를 사용하세요" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>
      <Layout>
        <section className="max-w-7xl mx-auto px-6 py-8 flex h-max w-full">
          <div className="flex gap-x-8 w-full">
            <div className="absolute pt-1.5 pl-1.5 flex gap-x-0.5">
              {emoticon.default && (
                <div className="bg-pink-500 text-white text-xs flex items-center justify-center px-1.5 py-0.5 rounded-full">
                  <span className="font-medium leading-4">기본</span>
                </div>
              )}
              {emoticon.official && (
                <div className="bg-emerald-500 text-white text-xs flex items-center justify-center px-1.5 py-0.5 rounded-full">
                  <span className="font-medium leading-4">공식</span>
                </div>
              )}
              {emoticon.recommended && (
                <div className="bg-brand text-white text-xs flex items-center justify-center px-1.5 py-0.5 rounded-full">
                  <span className="font-medium leading-4">추천</span>
                </div>
              )}
            </div>
            <div className="aspect-square flex items-center justify-center h-max flex-shrink-0 border border-neutral-100 rounded-xl shadow-md">
              <img
                src={`https://playentry.org/uploads/${emoticon.image.filename.slice(
                  0,
                  2
                )}/${emoticon.image.filename.slice(2, 4)}/${emoticon.image.filename}.${emoticon.image.imageType}`}
                className="h-20"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-[40px] font-semibold leading-10 break-keep">{emoticon.title}</h2>
              <div className="text-lg font-semibold leading-5 mt-0.5 break-keep">
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
            <div className="flex items-center ml-auto">
              <button
                id="add-emoticon"
                className="text-lg font-semibold px-6 py-3 ml-4 leading-4 rounded-lg w-max bg-brand disabled:bg-neutral-400 cursor-pointer disabled:cursor-not-allowed text-white shadow-md"
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
          <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-6 gap-x-16 gap-y-12 h-full">
            {images.map((image) => {
              return (
                <img
                  src={`https://playentry.org/uploads/${image.filename.slice(0, 2)}/${image.filename.slice(2, 4)}/${
                    image.filename
                  }.${image.imageType}`}
                  title={image.name.slice(0, (image.imageType.length + 1) * -1)}
                  key={image.id}
                />
              );
            })}
          </div>
        </section>
        <section className="max-w-7xl w-full mx-auto px-6 mb-12 flex flex-col">
          <h2 className="text-2xl font-semibold mt-8">상세 정보</h2>
          <table className="border border-neutral-50 w-full max-w-full rounded-lg shadow-md mt-1">
            <tr className="border-r border-r-neutral-100">
              <th className="text-center text-[17px] font-medium border-b border-b-neutral-100 bg-neutral-50 px-4 py-1 whitespace-nowrap w-0">
                이름
              </th>
              <td className="text-[17px] font-medium border-b border-b-neutral-100 px-4 py-1">{emoticon.title}</td>
            </tr>
            <tr className="border-r border-r-neutral-100">
              <th className="text-center text-[17px] font-medium border-b border-b-neutral-100 bg-neutral-50 px-4 py-1 whitespace-nowrap w-0">
                제작자
              </th>
              <td className="text-[17px] font-medium border-b border-b-neutral-100 px-4 py-1">
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
              <th className="text-center text-[17px] font-medium border-b border-b-neutral-100 bg-neutral-50 px-4 py-1 whitespace-nowrap w-0">
                업로드 날짜
              </th>
              <td className="text-[17px] font-medium border-b border-b-neutral-100 px-4 py-1">
                {format(emoticon.date, "yyyy년 MM월 dd일 HH시 mm분")}
              </td>
            </tr>
            <tr className="border-r border-r-neutral-100">
              <th className="text-center text-[17px] font-medium bg-neutral-50 px-4 py-1 whitespace-nowrap w-0">
                이모티콘 개수
              </th>
              <td className="text-[17px] font-medium px-4 py-1">{images.length}</td>
            </tr>
          </table>
        </section>
      </Layout>
    </>
  );
};

export default Index;
