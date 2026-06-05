import * as styles from './privacy-page.css';

const PrivacyPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.pageTitle}>개인정보처리방침</h1>
        <p className={styles.effectiveDate}>시행일: 2026년 6월 1일</p>

        <p className={styles.intro}>
          빅데이터 연합동아리 BOAZ(이하 &quot;BOAZ&quot;)는 이용자의 개인정보를 중요하게 생각하며,
          「개인정보 보호법」 등 관련 법령을 준수하여 개인정보를 적법하게 처리하고 안전하게
          관리합니다. 「개인정보 보호법」 제30조에 따라 이용자에게 개인정보 처리에 관한 절차와
          기준을 안내하고 관련 고충을 신속하게 처리할 수 있도록, 다음과 같이 개인정보처리방침을
          수립·공개합니다.
        </p>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. 수집하는 개인정보 항목 및 수집 방법</h2>
          <p className={styles.sectionText}>BOAZ는 다음의 개인정보를 수집합니다.</p>

          <p className={styles.sectionSubTitle}>가. 소셜 로그인 시 (자동 수집)</p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>제공 사업자</th>
                <th>수집 항목</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>카카오</td>
                <td>회원번호, 닉네임</td>
              </tr>
              <tr>
                <td>구글</td>
                <td>고유 식별자, 이름</td>
              </tr>
              <tr>
                <td>네이버</td>
                <td>고유 식별자, 이름</td>
              </tr>
            </tbody>
          </table>
          <p className={styles.sectionText}>
            소셜 로그인 과정에서 이메일 주소는 수집하지 않습니다.
          </p>

          <p className={styles.sectionSubTitle}>나. 지원서 작성 시 (이용자 직접 입력)</p>
          <p className={styles.sectionText}>이름, 이메일, 연락처, 대학, 전공, 지원 트랙</p>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. 개인정보의 수집 및 이용 목적</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>회원 식별 및 로그인 인증</li>
            <li className={styles.listItem}>동아리 모집 지원서 접수 및 선발 절차 진행</li>
            <li className={styles.listItem}>동아리 활동 관리(출석 확인 등)</li>
            <li className={styles.listItem}>공지 전달 및 문의 응대</li>
          </ul>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. 개인정보의 보유 및 이용 기간</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>회원 계정 정보: 회원 탈퇴 시 지체 없이 파기합니다.</li>
            <li className={styles.listItem}>
              지원서 정보: 미선발자의 지원서는 선발 결과 발표 후 30일 이내 파기하며, 선발자의 정보는
              동아리 활동 종료까지 보관 후 파기합니다.
            </li>
            <li className={styles.listItem}>
              관련 법령에 따라 보존이 필요한 경우 해당 법령에서 정한 기간 동안 보관합니다.
            </li>
          </ul>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. 개인정보의 제3자 제공</h2>
          <p className={styles.sectionText}>
            BOAZ는 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 법령에 따라 요구되는 경우는
            예외로 합니다.
          </p>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. 개인정보 처리의 위탁</h2>
          <p className={styles.sectionText}>
            BOAZ는 안정적인 서비스 운영을 위해 아래와 같이 개인정보 처리 업무를 위탁합니다.
          </p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>수탁자</th>
                <th>위탁 업무</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amazon Web Services (AWS)</td>
                <td>서버 및 데이터베이스 등 클라우드 인프라 운영</td>
              </tr>
            </tbody>
          </table>
          <p className={styles.sectionText}>
            위탁에 따라 처리되는 데이터는 국내(서울) 리전에 저장됩니다.
          </p>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. 개인정보의 파기</h2>
          <p className={styles.sectionText}>
            보유 기간이 경과하거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다. 전자적 파일
            형태의 정보는 복구할 수 없는 기술적 방법으로 삭제합니다.
          </p>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. 정보주체의 권리 및 행사 방법</h2>
          <p className={styles.sectionText}>
            이용자는 언제든지 본인의 개인정보에 대해 다음 권리를 행사할 수 있습니다.
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>개인정보 열람 요청</li>
            <li className={styles.listItem}>개인정보 정정·삭제 요청</li>
            <li className={styles.listItem}>개인정보 처리정지 요청</li>
            <li className={styles.listItem}>회원 탈퇴를 통한 수집·이용 동의 철회</li>
          </ul>
          <p className={styles.sectionText}>
            권리 행사는 아래 개인정보 보호책임자에게 연락하여 진행할 수 있습니다.
          </p>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. 쿠키의 사용</h2>
          <p className={styles.sectionText}>
            BOAZ는 로그인 상태 유지 및 인증을 위해 쿠키를 사용합니다. 이용자는 웹 브라우저 설정을
            통해 쿠키 저장을 거부할 수 있으나, 이 경우 로그인 등 일부 서비스 이용이 제한될 수
            있습니다.
          </p>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>9. 개인정보의 안전성 확보 조치</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>개인정보에 대한 접근 권한 제한</li>
            <li className={styles.listItem}>통신 구간 암호화(HTTPS) 적용</li>
            <li className={styles.listItem}>
              비밀번호 등 인증정보를 직접 저장하지 않고 소셜 로그인을 통한 인증 사용
            </li>
          </ul>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>10. 개인정보 보호책임자 및 문의처</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>개인정보 보호책임자: 문혁준 (25기 대표)</li>
            <li className={styles.listItem}>이메일: boaz.bigdata@naver.com</li>
          </ul>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>11. 개인정보 처리방침의 변경</h2>
          <p className={styles.sectionText}>
            이 개인정보처리방침의 내용이 변경되는 경우, BOAZ는 변경 사항을 웹사이트를 통해
            공지합니다.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPage;
