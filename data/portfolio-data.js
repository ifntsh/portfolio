const portfolioData = {
    // 기본 정보
    name: "Sohyun Park",
    title: "Data Engineering & Database Technology",
    bio: "데이터 기반 시스템을 안정적으로 설계하고 운영하는 것에 관심이 많습니다. DW 전환, SQL 최적화, 데이터 파이프라인 구축을 수행하며, 향후 데이터 플랫폼 및 DBA 영역까지 전문성을 확장해 나가고자 합니다.",
    
    // 스킬
    skills: [
    // Database & Data Engineering
    "DW Pipeline",
    "ETL",
    "Airflow",
    "Google BigQuery",
    "Oracle",
    "MySQL",
    "MongoDB",
    "SQL Tuning",
    // "Database Schema Design",
    "Google Cloud Composer",

    // Programming & Backend
    "Python",
    "Java",
    "Spring Boot",
    "Node.js",
    "PL/SQL",
    // "Pro*C",

    // Cloud & Infra
    "GCP",
    "AWS",
    "Terraform",
    "Docker",
    "Kubernetes",
    "CI/CD (Jenkins)",

    // Monitoring & Ops
    // "GCP Monitoring",
    // "Zabbix",
    "Log Analysis",
    // "Slack API Notification",

    // Collaboration & Others
    "Git",
    // "ERD & Data Modeling",
    // "Batch Scheduling & 운영"
    ],

    
    // 프로젝트
    projects: [
        {
            title: "현대카드 DW 파이프라인 구축 (Oracle → BigQuery 전환)",
            date: "2025.10 ~ 2026.04",
            description: "Oracle 기반 DW 자산을 BigQuery 플랫폼으로 전환하는 프로젝트에서 데이터 엔지니어로 참여하였습니다. 기존 PL/SQL · Pro*C 기반 처리 로직을 분석하여 ANSI SQL 및 BigQuery에 적합한 구조로 재작성하였으며, DW 파이프라인 구조 재정립, 배치 스케줄링 설계, 예외 처리 표준화 등을 수행하였습니다.",
            techStack: [
                "BigQuery", "Oracle", "SQL Tuning", "DW Pipeline", "PL/SQL", "Pro*C"
            ]
        },
        {
            title: "삼성전자 Cloud Service 운영 · 데이터 품질 모니터링 및 튜닝",
            date: "2024.01 ~ 2025.10",
            description: "클라우드 환경에서 DB 운영과 데이터 품질 모니터링을 담당하였습니다. 쿼리 튜닝을 통해 SQL 실행 효율을 개선하고, Airflow 기반 품질 점검 및 이상 탐지 DAG를 설계하여 운영 안정성과 무결성을 확보하였습니다. 또한 기존에 운영 환경만 존재하던 Airflow 구성에 개발 환경을 신규로 구축하여 DAG 개발 및 사전 검증 체계를 수립하였으며, 로그 분석을 기반으로 장애 대응 자동화 환경을 마련하였습니다.",
            techStack: [
                "BigQuery", "Airflow", "Python", "Composer", "GCP Monitoring"
            ]
        },
        {
            title: "클라우드 관리 플랫폼(CMP) 구축 및 DB 설계/운영 자동화",
            date: "2023.02 ~ 2023.08",
            description: "신규 MSA 기반 CMP 개발 프로젝트에서 DB 담당자로 초기 설계부터 투입되었습니다. 서비스 요건 기반 스키마 설계 및 인덱스 전략을 수립하고, Terraform 기반으로 DB 인프라 구축 및 배포를 자동화하였습니다. Spring Boot API와의 연동을 고려한 SQL 설계, 성능 점검 및 운영 문서화를 수행하였습니다.",
            techStack: [
                "Terraform", "Spring Boot", "AWS", "Docker", "Kubernetes", "Node.js", "Vue3", "MySQL"
            ]
        },
        {
            title: "백엔드 및 데이터 기반 서비스 개발",
            date: "2019.02 ~ 2022.06",
            description: "데이터 검증을 포함한 신규 서비스 데이터 처리 로직을 구축하고, 스키마 설계 및 프로시저 개발을 수행하였습니다. 데이터 수집 자동화 및 클라우드 운영 경험을 통해 데이터 정합성과 운영 효율을 개선하였습니다.",
            techStack: [
                "Java", "Spring Boot", "Node.js", "Python", "MySQL", 
                "MongoDB", "AWS", "Jenkins", "Zabbix", "Linux", "Git"
            ]
        }
    ],
    
    // 연락처
    contacts: [
        {
            icon: "📧",
            text: "Email",
            email: "bizifntsh@gmail.com",
            type: "email"
        },
        {
            icon: "💻",
            text: "GitHub",
            url: "https://github.com/ifntsh"
        },
        // {
        //     icon: "💼",
        //     text: "LinkedIn",
        //     url: "https://linkedin.com/in/yourusername"
        // },
        {
            icon: "✍️",
            text: "Blog",
            url: "https://shpp.tistory.com/"
        }
    ]
};