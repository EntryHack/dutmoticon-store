import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/Layout";

const Index: NextPage<{ version: string }> = ({ version }) => {
  return (
    <>
      <Head>
        <title>Dutmoticon 설치 | Dutmoticon 스토어</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="엔트리에서 더 많은 스티커를 사용하세요" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dutmoticon 스토어" />
        <meta property="og:site_name" content="Dutmoticon 스토어" />
        <meta property="og:description" content="엔트리에서 더 많은 스티커를 사용하세요" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>
      <Layout>
        <section className="bg-brand bg-top bg-[length:1600px] 0.5md:bg-[length:600px] bg-no-repeat bg-[url('/background.png')] 0.5md:bg-[url('/background-small.png')] w-full h-[600px] flex-shrink-0">
          <div className="max-w-7xl mx-auto px-10 0.5md:px-6 flex items-center h-full">
            <div className="max-w-4xl">
              <h1 className="text-5xl 0.5md:text-[42px] xs:text-4xl text-white font-semibold break-keep text-shadow">
                Dutmoticon을 사용해 보세요
              </h1>
              <p className="text-xl 0.5md:text-lg xs:text-base text-white/90 font-medium mt-4 word break-keep text-shadow">
                Dutmoticon에 흥미가 생기셨나요? 원한다면 지금 바로 사용해 볼 수 있어요.
              </p>
              <div className="flex xs:flex-col gap-3 mt-5">
                <a
                  href={`https://github.com/thoratica/dutmoticon/archive/refs/tags/${version}.zip`}
                  className="text-[22px] font-semibold px-9 py-[18px] leading-4 rounded-lg bg-white/20 backdrop-blur-md text-white text-shadow shadow-md"
                >
                  {`지금 다운로드 (v${version})`}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl w-full mx-auto px-10 0.5md:px-6 pb-2 mb-8 flex flex-col">
          <h2 className="text-2xl font-semibold mt-8">설치 가이드</h2>
          <div className="mt-2 grid grid-cols-2 xs:grid-cols-1 w-full gap-4">
            {[
              '1. "지금 다운로드" 버튼을 눌러 ZIP 파일을 다운로드하세요.',
              "2. 다운로드한 ZIP 파일의 압축을 해제하세요.",
              "3. 주소창에 chrome://extensions를 입력해 확장 프로그램 페이지로 이동한 뒤 개발자 모드를 활성화하세요.",
              "4. 압축을 해제한 폴더를 확장 프로그램 페이지에 드래그&드롭으로 설치하세요.",
              "5. 설치가 완료되면 열리는 Dutmoticon 스토어에서 원하는 이모티콘을 클릭하세요.",
              '6. "Dutmoticon에 추가" 버튼을 클릭해 이모티콘을 추가하세요.',
              "7. 엔트리 이야기나 작품 댓글에서 추가한 이모티콘을 사용하세요.",
            ].map((step, i) => {
              return (
                <div
                  className="flex flex-col rounded-xl overflow-hidden border border-neutral-100 shadow-md hover:transform hover:-translate-y-1.5 transition-transform duration-300"
                  key={i}
                >
                  <img src={`/guide/step-${i + 1}.png`} className="border-b border-b-neutral-100 aspect-video" />
                  <div className="flex flex-col justify-center w-full min-w-0 px-4 py-3">
                    <span className="text-lg font-medium leading-5">{step}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await (
    await fetch("https://api.github.com/repos/thoratica/dutmoticon/releases", {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    })
  ).json();
  const version = res[0].tag_name;

  return { props: { version } };
};

export default Index;
