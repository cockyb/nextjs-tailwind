# Next.js Template
Next.js, tailwindcss, typescript로 구성된 템플릿 입니다.

### 주요 패키지
* [next-seo](https://www.npmjs.com/package/next-seo):
SEO작업을 위한 패키지 siteMetadata.json파일은 대부분의 사이트 관련 정보를 포함합니다. 

* [tailwindcss](https://tailwindcss.com/):
마크업 단계에서 CSS 디자인을 빌드할 수 있는 CSS Framework입니다. 

* [sass](https://sass-lang.com/):
Next.js는 Sass를 지원합니다. css의 확장 문법인 scss 또는 sass문법을 배우세요.

* [Google Analytics](https://analytics.google.com):
GA 설정위한 스크립트가 _document.tsx파일에 삽입되어 있습니다. [Google Analytics](https://analytics.google.com)페이지 에서 trackingID를 발급받아 사용하세요. (유니버셜 애널리틱스 속성이 아닙니다.)

### 프로젝트 설치

```bash
npm install
```
package.json에 명시된 package들을 설치하는 절차입니다.

### 개발모드 실행
```bash
npm run dev
```
해당 스크립트는 `next dev` 명령어를 실행하며 개발서버를 실행합니다.
http://localhost:3000에서 확인하실 수 있으며, 프로젝트의 수정이 있다면 리로드 됩니다.

### 프로젝트 빌드 및 실행
* tailwindcss.config.js 파일 내 [purge옵션](https://tailwindcss.com/docs/optimizing-for-production)을 통해 사용하지 않는 css를 지울 수 있습니다.

* 빌드 및 실행
```bash
npm run build
```
```bash
npm run start
```
프로덕션을 위한 프로젝트 빌드과정을 거친 뒤 node 환경에서 프로젝트를 실행하실 수 있습니다.

### 더 알아보기
[Next.js](https://nextjs.org/) SSR을 지원하는 React 프레임 워크입니다.
[Tailwindcss](https://tailwindcss.com/) Css Framework 입니다.