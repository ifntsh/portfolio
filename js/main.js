// DOM 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', () => {
    // 기본 정보 렌더링
    renderBasicInfo();
    
    // 스킬 렌더링
    renderSkills();
    
    // 프로젝트 렌더링
    renderProjects();
    
    // 연락처 렌더링
    renderContacts();
});

// 기본 정보 렌더링
function renderBasicInfo() {
    document.getElementById('name').textContent = portfolioData.name;
    document.getElementById('title').textContent = portfolioData.title;
    document.getElementById('bio').textContent = portfolioData.bio;
    document.getElementById('footer-name').textContent = portfolioData.name;
}

// 스킬 렌더링
function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    portfolioData.skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });
}

// 프로젝트 렌더링
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p class="date">${project.date}</p>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${project.techStack.map(tech => 
                    `<span class="tech-badge">${tech}</span>`
                ).join('')}
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// 연락처 렌더링
function renderContacts() {
    const contactLinksContainer = document.getElementById('contact-links');
    
    portfolioData.contacts.forEach(contact => {
        const link = document.createElement('a');
        link.className = 'contact-link';
        
        if (contact.type === 'email') {
            // 이메일은 복사 기능
            link.href = '#';
            link.textContent = `${contact.icon} ${contact.text}`;
            
            // ⭐ 여기서 contact.email 확인
            // console.log('이메일 주소:', contact.email); // 디버깅용
            
            link.addEventListener('click', (e) => {
                e.preventDefault();
                copyToClipboard(contact.email);  // undefined가 전달되고 있음
            });
        } else {
            // 나머지는 링크
            link.href = contact.url;
            link.target = '_blank';
            link.textContent = `${contact.icon} ${contact.text}`;
        }
        
        contactLinksContainer.appendChild(link);
    });
}

// 클립보드 복사 함수
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // 복사 성공 알림
        showCopyNotification('이메일 주소가 복사되었습니다! 📋 \n bizifntsh@gmail.com');
    }).catch(err => {
        // 복사 실패 시 폴백
        fallbackCopyToClipboard(text);
    });
}

// 구형 브라우저용 폴백
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopyNotification('이메일 주소가 복사되었습니다! 📋');
    } catch (err) {
        showCopyNotification('복사 실패. 직접 복사해주세요: ' + text);
    }
    
    document.body.removeChild(textArea);
}

// 복사 알림 표시
function showCopyNotification(message) {
    // 기존 알림이 있으면 제거
    const existingNotification = document.querySelector('.copy-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 새 알림 생성
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // 애니메이션과 함께 표시
    setTimeout(() => notification.classList.add('show'), 10);
    
    // 3초 후 제거
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}