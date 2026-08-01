<div align="center">

# BOAZ 공식 홈페이지

**국내 최초 빅데이터 동아리 BOAZ의 공식 홈페이지**
<br />

<img width="1200" height="630" alt="boaz-og" src="https://github.com/user-attachments/assets/55b80705-4850-451f-b7f0-bc3e3ae8592b" />

🔗 Service link: https://www.bigdataboaz.com/

</div>

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Vanilla Extract
- **Routing**: React Router v7
- **State Management**: TanStack Query
- **HTTP Client**: Axios
- **Linting**: ESLint, Prettier, Stylelint
- **Git Hooks**: Lefthook + Commitlint

## Getting Started 🔥

### Installation
```bash
pnpm install
```

### Development
```bash
pnpm dev
```

### Build
```bash
pnpm build
```

### Lint
```bash
pnpm lint          # ESLint
pnpm lint:css      # Stylelint
pnpm format        # Prettier
```

### API 타입 생성
> Node.js를 사용하여 OpenAPI 3.0 및 3.1 스키마를 빠르게 TypeScript로 변환해주는 [OpenAPI TypeScript](https://github.com/openapi-ts/openapi-typescript) 라이브러리를 사용합니다.

```bash
pnpm generate:types
```

## Project Structure
> FSD 아키텍처 layers를 적용했습니다
```
src/
├── app/          # 앱 설정 (라우팅, 프로바이더, 레이아웃)
├── pages/        # 페이지 컴포넌트
├── widgets/      # 위젯 (페이지 단위 조합 컴포넌트)
├── features/     # 기능 단위 모듈
├── entities/     # 엔티티 (도메인 모델)
└── shared/       # 공통 유틸, API, UI 컴포넌트
```

## Contributors 🌱

### 1기

| Profile | Name | GitHub | Role |
|---------|------|--------|------|
| <img src="https://github.com/yooncandooit.png" width="50" height="50" /> | yooncandooit | [@yooncandooit](https://github.com/yooncandooit) | Lead |
| <img src="https://github.com/onlyone130.png" width="50" height="50" /> | onlyone130 | [@onlyone130](https://github.com/onlyone130) | Member |
| <img src="https://github.com/ity0526.png" width="50" height="50" /> | ity0526 | [@ity0526](https://github.com/ity0526) | Member |
