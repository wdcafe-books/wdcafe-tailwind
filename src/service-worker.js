import { precacheAndRoute } from 'workbox-precaching'; // workbox-precaching에서 precacheAndRoute를 가져옵니다.
import { registerRoute } from 'workbox-routing'; // workbox-routing에서 registerRoute를 가져옵니다.
import { StaleWhileRevalidate } from 'workbox-strategies'; // workbox-strategies에서 StaleWhileRevalidate를 가져옵니다.
import { CacheFirst } from 'workbox-strategies'; // workbox-strategies에서 CacheFirst를 가져옵니다.
import { ExpirationPlugin } from 'workbox-expiration'; // workbox-expiration에서 ExpirationPlugin을 가져옵니다.
import { CacheableResponsePlugin } from 'workbox-cacheable-response'; // workbox-cacheable-response에서 CacheableResponsePlugin을 가져옵니다.

// 빌드 과정에서 생성된 모든 자산을 사전 캐시합니다.
precacheAndRoute(self.__WB_MANIFEST);

// CSS 파일과 JavaScript 파일을 stale-while-revalidate 전략으로 캐시합니다.
registerRoute(
  ({ request }) => request.destination === 'style' || request.destination === 'script',
  new StaleWhileRevalidate({
    cacheName: 'static-resources', // 캐시 이름을 'static-resources'로 설정합니다.
  })
);

// 이미지 파일을 30일 동안 cache-first 전략으로 캐시합니다.
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images', // 캐시 이름을 'images'로 설정합니다.
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60, // 최대 30일 동안 캐시 유지.
        maxEntries: 60, // 최대 60개의 이미지만 캐시합니다.
      }),
    ],
  })
);

// API 응답을 stale-while-revalidate 전략으로 캐시합니다.
registerRoute(
  ({ url }) => url.origin === 'https://vue-tailwind-example.netlify.app',
  new StaleWhileRevalidate({
    cacheName: 'api-responses', // 캐시 이름을 'api-responses'로 설정합니다.
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200], // 상태 코드 200만 캐시합니다.
      }),
    ],
  })
);