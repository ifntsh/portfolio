const portfolioData = {
  // 기본 정보
  name: "Sohyun Park",
  title: "Data Engineer | Data Pipeline & Cloud DW",
  bio: "8년 차 데이터 엔지니어로, 백엔드 개발 경험을 바탕으로 GCP·AWS 환경에서 대규모 데이터 파이프라인을 설계, 구축, 운영해 왔습니다. 배치 자동화와 모니터링 체계로 운영 안정성과 처리 효율을 높이는 일에 강점이 있습니다.",

  // 스킬
  skills: [
    // Database & Data Engineering
    "DW Pipeline",
    "ETL",
    "Airflow",
    "Spark (Scala)",
    "Kafka",
    "Apache Iceberg",
    "Trino",
    "Google BigQuery",
    "Oracle",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "SQL Tuning",
    "Google Cloud Composer",
    "Tableau",
    // Programming & Backend
    "Python",
    "Scala",
    "Java",
    "Spring Boot",
    "Node.js",
    "PL/SQL",
    // Cloud & Infra
    "GCP",
    "AWS",
    "Terraform",
    "Docker",
    "Kubernetes",
    "CI/CD (Jenkins)",
    // Monitoring & Ops
    "Zabbix",
    "GCP Monitoring",
    "Slack API Notification",
    // Collaboration & Others
    "Git",
  ],

  // 프로젝트
  projects: [
    {
      title: "국내 대형 유통사 데이터 파이프라인 구축 및 고도화 (AWS · Iceberg)",
      date: "2026.04 ~ 2026.12",
      description: "협력사 내 유일한 데이터 엔지니어로서 DBA 4인과 협업하며 파이프라인 운영과 배치 자동화 체계를 전담했습니다. Jar 스크립트 기반 배치 전체를 Airflow로 전환하고 DAG 개발부터 운영, 장애 대응까지 단독 수행했으며, 콜백 기반 모니터링 플러그인으로 배치 실패 시 SMS 알림 체계를 구축했습니다. Jenkins 기반 브랜치 Merge 자동배포 체계로 전환하고, Kafka 기반 행동로그 Spark 집계 로직을 리팩토링했으며, Oracle DW의 Iceberg 전환에 따른 분석 테이블 약 60개를 설계했습니다.",
      techStack: ["AWS", "Kafka", "Spark (Scala)", "Airflow", "Jenkins", "Iceberg", "Trino", "Oracle", "PostgreSQL", "Tableau"],
    },
    {
      title: "국내 카드사 DW 파이프라인 구축 (Oracle → BigQuery 전환)",
      date: "2025.10 ~ 2026.04",
      description: "Oracle ADW 기반 DW를 BigQuery 기반 DW/DM으로 전환하는 금융 데이터 마이그레이션에서 Pro*C 배치 SQL 818개와 프로시저 19개를 BigQuery ETL 파이프라인으로 전환했습니다. 파티션/클러스터링 전략으로 스캔량과 비용을 줄이고, STEP 단위 실행과 건수 비교 기반의 정합성 검증(Reconciliation) 체계를 수립했습니다.",
      techStack: ["BigQuery", "Oracle Exadata", "Pro*C", "PL/SQL", "Python", "GCP", "Airflow"],
    },
    {
      title: "국내 전자 제조사 Cloud Service 운영 · 데이터 품질 모니터링 및 튜닝",
      date: "2024.01 ~ 2025.10",
      description: "DAG 20개, 태스크 그룹 400개 이상, 슬롯 3,000개 규모의 BigQuery 배치 파이프라인을 운영하며 Airflow 기반 데이터 품질 이상 탐지 DAG와 Slack 알림 체계를 구축했습니다. 주간 배치의 UNNEST 데이터 폭발(3,100억 건)과 디스크 스필 75TB 병목을 발견하고 사전 필터링 구조 재설계안을 제안하여 디스크 스필 0, 슬롯 사용량 50% 절감 효과를 도출했습니다.",
      techStack: ["BigQuery", "SQL", "Python", "Airflow", "GCP Monitoring", "Slack API"],
    },
    {
      title: "클라우드 관리 플랫폼(CMP) 구축 및 DB 설계/운영 자동화",
      date: "2023.02 ~ 2023.08",
      description: "MSA 기반 클라우드 관리 플랫폼 신규 구축에서 MySQL 스키마와 인덱스 설계, Terraform 기반 DB 인프라 IaC, Spring Boot 백엔드 API와 Vue3 화면 개발, Docker/Kubernetes 배포 파이프라인 구축을 수행했습니다.",
      techStack: ["MySQL", "Terraform", "Spring Boot", "Vue3", "AWS", "GCP", "Docker", "Kubernetes"],
    },
    {
      title: "백엔드 및 데이터 기반 서비스 개발",
      date: "2019.02 ~ 2022.06",
      description: "서비스 약 20개 규모, 일 1억 건 이상 수집 시스템을 운영하며 개인 담당 서비스 5개를 맡았습니다. Node.js 기반 신규 수집 시스템을 구축하고 MySQL 전체 데이터를 MongoDB로 마이그레이션했으며, Jenkins CI/CD와 Zabbix 텔레그램 연동 장애 알림 체계를 구축했습니다.",
      techStack: ["MySQL", "MongoDB", "Java", "Python", "Node.js", "Jenkins", "Zabbix", "AWS"],
    },
  ],

  // 연락처
  contacts: [
    {
      icon: "\u{1F4E7}",
      text: "Email",
      email: "bizifntsh@gmail.com",
      type: "email",
    },
    {
      icon: "\u{1F4BB}",
      text: "GitHub",
      url: "https://github.com/ifntsh",
    },
    // {
    //   icon: "\u{1F4BC}",
    //   text: "LinkedIn",
    //   url: "https://www.linkedin.com/in/your-id",
    // },
    {
      icon: "\u270D\uFE0F",
      text: "Blog",
      url: "https://shpp.tistory.com/",
    },
  ],
};
