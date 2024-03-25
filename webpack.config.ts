// Node.js 모듈 path 불러오기
const path = require("path");

// CommonJS 방식의 모듈 내보내기
module.exports = {
  // 엔트리 파일 설정
  entry: "./src/index.js",
  // 아웃풋 파일 출력 설정
  output: {
    // 파일 이름
    filename: "main.js",
    // 경로
    path: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      component: path.resolve(__dirname, "./src/component/"),
      page: path.resolve(__dirname, "./src/page/"),
    },
  },

  mode: "development",
};
