import Layout from "../components/layout";
import { useRouter } from 'next/router'
import React, {useEffect, Component} from 'react'

// function absoluteUrl(req, setLocalhost) {
//   var protocol = "http:";
//   var host = req
//     ? req.headers["x-forwarded-host"] || req.headers["host"]
//     : window.location.host;
//   if (host.indexOf("localhost") > -1) {
//     if (setLocalhost) host = setLocalhost;
//     protocol = "http:";
//   }
//   return {
//     protocol: protocol,
//     host: host,
//     origin: protocol + "//" + host,
//   };
// }
// function getHashParams() {
//   var hashParams = {};
//   var e, r = /([^&;=]+)=?([^&;]*)/g,
//       q = window.location.hash.substring(1);
//   e = r.exec(q)
//   while (e) {
//      hashParams[e[1]] = decodeURIComponent(e[2]);
//      e = r.exec(q);
//   }
//   return hashParams;
// }


function IndexPage( ) {
  // const router = useRouter()
  // console.log(fullUrl)
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <img
          src="team-of-critters.svg"
          className="w-full max-w-xl"
          alt="Four one-eyed aliens playing"
        />

        <h2 className="p-3 my-8 text-lg font-bold bg-yellow-400 md:text-2xl">
          Hi! Welcome to your first Next.js site.
        </h2>
        <a href="http://localhost:8888">
          <button>Login to spotify</button>
        </a>
      </div>
    </Layout>
  );
}


export default IndexPage;
