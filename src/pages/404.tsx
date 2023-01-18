import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 | Dutmoticon 스토어</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="엔트리에서 더 많은 스티커를 사용하세요" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="404" />
        <meta property="og:site_name" content="Dutmoticon 스토어" />
        <meta property="og:description" content="엔트리에서 더 많은 스티커를 사용하세요" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>
      <Layout>
        <section className="h-full flex items-center">
          <div
            className="bg-brand bg-top bg-[length:1600px] bg-no-repeat w-full h-[600px] flex-shrink-0 mb-40"
            style={{ backgroundImage: "url('/background.png')" }}
          >
            <div className="max-w-7xl mx-auto px-10 0.5md:px-6 flex items-center h-full">
              <div className="max-w-4xl">
                <h1 className="text-5xl text-white font-semibold break-keep text-shadow">404 Not Found</h1>
                <p className="text-xl text-white/90 font-medium mt-4 word break-keep text-shadow">
                  이 페이지는 더 이상 존재하지 않아요. 당장 메인 페이지로 돌아가자고요!
                </p>
                <div className="flex gap-x-3 mt-5">
                  <Link
                    href="/"
                    className="text-lg font-medium px-6 py-3 leading-4 rounded-lg bg-white/20 backdrop-blur-md text-white text-shadow shadow-md"
                  >
                    메인 페이지로 이동하기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Custom404;
