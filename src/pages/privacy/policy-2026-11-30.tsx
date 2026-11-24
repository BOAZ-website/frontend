import * as styles from '../privacy-page.css';

const ExternalLink = ({ href, label }: { href: string; label: string }) => (
  <a href={href} target="_blank" rel="noreferrer" className={styles.link}>
    {label}
  </a>
);

/** 2026-11-30 시행 개인정보 처리방침. */
const PrivacyPolicy20261130 = () => (
  <>
    <p className={styles.intro}>
      빅데이터 연합동아리 BOAZ(이하 &quot;BOAZ&quot;)는 「개인정보 보호법」 제30조에 따라 지원자와
      회원의 개인정보를 보호하고, 관련 고충을 신속하게 처리하기 위해 다음과 같이 개인정보 처리방침을
      정합니다.
    </p>

    <section className={styles.section}>
      <p className={styles.sectionSubTitle}>목차</p>
      <ul className={styles.list}>
        <li className={styles.plainListItem}>① 처리하는 개인정보 항목, 목적, 근거</li>
        <li className={styles.plainListItem}>② 개인정보의 제3자 제공, 처리 위탁, 국외 이전</li>
        <li className={styles.plainListItem}>③ 개인정보의 보유기간과 파기</li>
        <li className={styles.plainListItem}>④ 개인정보의 안전성 확보조치</li>
        <li className={styles.plainListItem}>⑤ 정보주체의 권리와 행사 방법</li>
        <li className={styles.plainListItem}>⑥ 개인정보 보호책임자</li>
        <li className={styles.plainListItem}>⑦ 권익침해 구제방법</li>
        <li className={styles.plainListItem}>⑧ 시행일</li>
      </ul>
    </section>

    <hr className={styles.divider} />

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>① 처리하는 개인정보 항목, 목적, 근거</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>구분</th>
            <th>수집 항목</th>
            <th>처리 목적</th>
            <th>처리 근거</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>소셜 로그인 (카카오)</td>
            <td>회원번호, 닉네임</td>
            <td>회원 식별, 로그인</td>
            <td>계약 이행 (법 제15조제1항제4호)</td>
          </tr>
          <tr>
            <td>소셜 로그인 (구글·네이버)</td>
            <td>식별값, 이름</td>
            <td>회원 식별, 로그인</td>
            <td>계약 이행 (법 제15조제1항제4호)</td>
          </tr>
          <tr>
            <td>지원서</td>
            <td>
              이름, 생년월일, 이메일, 휴대전화번호, 대학, 전공(부전공·복수전공 포함), 학년·학기,
              졸업 예정 연월, 병역 여부, 대학원 진학 여부, 지원 부문, 지원서 문항 답변
            </td>
            <td>
              지원서 접수, 서류・면접 평가, 활동 가능 기간 확인, 결과 안내, 선발 후 공지 전달과 문의
              응대
            </td>
            <td>정보주체 동의 (법 제15조제1항제1호)</td>
          </tr>
          <tr>
            <td>활동</td>
            <td>출결 기록, 활동 점수, 소속 부문</td>
            <td>동아리 활동 관리, 수료 판정</td>
            <td>계약 이행 (법 제15조제1항제4호)</td>
          </tr>
          <tr>
            <td>자동 생성 정보</td>
            <td>IP 주소, 접속 일시, 서비스 이용 기록, 쿠키</td>
            <td>서비스 안정성 확보, 부정 이용 방지</td>
            <td>정당한 이익 (법 제15조제1항제6호)</td>
          </tr>
          <tr>
            <td>이메일 문의</td>
            <td>이름, 이메일 주소, 문의 내용</td>
            <td>문의 응대, 권리 행사 요청 처리</td>
            <td>정보주체의 요청에 따른 조치 (법 제15조제1항제4호)</td>
          </tr>
        </tbody>
      </table>
      <ul className={styles.list}>
        <li className={styles.listItem}>소셜 로그인으로는 이메일을 수집하지 않습니다.</li>
        <li className={styles.listItem}>
          쿠키는 로그인 상태를 유지하는 데 씁니다. 브라우저 설정에서 쿠키 저장을 거부할 수 있지만,
          그렇게 하면 로그인이 유지되지 않을 수 있습니다.
        </li>
      </ul>
    </section>

    <hr className={styles.divider} />

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>② 개인정보의 제3자 제공, 처리 위탁, 국외 이전</h2>
      <p className={styles.sectionSubTitle}>1) 제3자 제공</p>
      <p className={styles.sectionText}>
        BOAZ는 정보주체의 개인정보를 제3자에게 제공하지 않습니다. 다만 법령에 특별한 규정이 있는
        경우는 예외로 합니다.
      </p>

      <p className={styles.sectionSubTitle}>2) 처리 위탁</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>수탁자</th>
            <th>위탁 업무</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Amazon Web Services, Inc.</td>
            <td>서버・데이터베이스 등 서비스 인프라 운영</td>
          </tr>
          <tr>
            <td>㈜다우기술</td>
            <td>선발 결과 등 안내 문자 발송 (뿌리오)</td>
          </tr>
          <tr>
            <td>네이버㈜</td>
            <td>이메일 수신・보관</td>
          </tr>
        </tbody>
      </table>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          위탁 계약을 맺을 때는 「개인정보 보호법」 제26조에 따라 다음 사항을 문서로 정합니다: 위탁
          업무 외 처리 금지, 안전성 확보조치, 재위탁 제한, 손해배상 등 책임에 관한 사항. 또한
          수탁자가 개인정보를 안전하게 처리하는지 감독합니다.
        </li>
        <li className={styles.listItem}>
          Amazon Web Services에 맡긴 개인정보는 서울 리전에 저장됩니다.
        </li>
      </ul>

      <p className={styles.sectionSubTitle}>3) 국외 이전</p>
      <p className={styles.sectionText}>BOAZ는 개인정보를 국외로 이전하지 않습니다.</p>
    </section>

    <hr className={styles.divider} />

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>③ 개인정보의 보유기간과 파기</h2>
      <p className={styles.sectionSubTitle}>1) 보유기간</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>구분</th>
            <th>보유기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>회원 계정 정보</td>
            <td>회원 탈퇴 요청을 처리할 때까지</td>
          </tr>
          <tr>
            <td>지원서 (미선발)</td>
            <td>최종 결과 발표일로부터 30일 이내 파기</td>
          </tr>
          <tr>
            <td>지원서와 활동 정보 (선발)</td>
            <td>해당 기수 활동 종료일로부터 3개월 이내 파기</td>
          </tr>
          <tr>
            <td>이메일 문의 내용</td>
            <td>문의 처리 완료 후 30일 이내 파기</td>
          </tr>
          <tr>
            <td>이용자 접속 기록</td>
            <td>수집일로부터 90일</td>
          </tr>
          <tr>
            <td>데이터베이스 자동 백업</td>
            <td>백업 생성일로부터 최대 7일</td>
          </tr>
        </tbody>
      </table>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          삭제한 정보는 자동 백업에 최대 7일 동안 남아 있다가 함께 삭제됩니다. 이 기간에 백업은 장애
          복구 용도로만 사용합니다.
        </li>
      </ul>

      <p className={styles.sectionSubTitle}>2) 파기 절차</p>
      <p className={styles.sectionText}>
        다음 중 하나에 해당하면 지체 없이 파기합니다: 보유기간이 지난 경우, 처리 목적을 달성한 경우,
        회원 탈퇴를 요청한 경우.
      </p>

      <p className={styles.sectionSubTitle}>3) 파기 방법</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          전자 파일은 복구할 수 없는 방법으로 영구 삭제합니다. 운영진이 따로 만든 백업본도 함께
          삭제합니다.
        </li>
        <li className={styles.listItem}>자동 백업은 생성일로부터 7일이 지나면 삭제됩니다.</li>
        <li className={styles.listItem}>종이 문서는 분쇄하거나 소각합니다.</li>
      </ul>
    </section>

    <hr className={styles.divider} />

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>④ 개인정보의 안전성 확보조치</h2>
      <p className={styles.sectionText}>
        BOAZ는 「개인정보 보호법」 제29조와 「개인정보의 안전성 확보조치 기준」에 따라 다음 조치를
        하고 있습니다.
      </p>

      <p className={styles.sectionSubTitle}>1) 관리적 조치</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          개인정보를 다루는 운영진을 최소한으로 지정하고, 개인정보 보호 교육을 합니다.
        </li>
        <li className={styles.listItem}>
          운영진이 바뀌면 개인정보 접근 권한을 지체 없이 회수합니다.
        </li>
        <li className={styles.listItem}>수탁자가 개인정보를 안전하게 처리하는지 감독합니다.</li>
      </ul>

      <p className={styles.sectionSubTitle}>2) 기술적 조치</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>이용자와 서비스 사이의 통신을 암호화(HTTPS)합니다.</li>
        <li className={styles.listItem}>데이터베이스에 저장되는 개인정보를 암호화합니다.</li>
        <li className={styles.listItem}>
          회원은 소셜 로그인으로 인증하며, 관리자 계정의 비밀번호는 복원할 수 없는 방식으로 암호화해
          저장합니다.
        </li>
      </ul>
    </section>

    <hr className={styles.divider} />

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>⑤ 정보주체의 권리와 행사 방법</h2>
      <ol className={styles.list}>
        <li className={styles.orderedListItem}>
          정보주체는 BOAZ에 언제든지 다음 권리를 행사할 수 있습니다.
          <ol className={styles.list}>
            <li className={styles.orderedListItem}>개인정보 열람 요구</li>
            <li className={styles.orderedListItem}>정정 요구</li>
            <li className={styles.orderedListItem}>삭제 요구</li>
            <li className={styles.orderedListItem}>처리정지 요구</li>
            <li className={styles.orderedListItem}>동의 철회 (회원 탈퇴 요청 포함)</li>
          </ol>
        </li>
        <li className={styles.orderedListItem}>
          권리는 ⑥의 이메일로 행사할 수 있으며, BOAZ는 본인 여부를 확인한 뒤 10일 이내에 조치합니다.
        </li>
        <li className={styles.orderedListItem}>
          「개인정보 보호법」 제35조제4항, 제36조제1항, 제37조제2항에 해당하면 요구가 제한되거나
          거절될 수 있으며, 이때는 그 사유를 알려 드립니다.
        </li>
        <li className={styles.orderedListItem}>
          조치 결과에 이의가 있으면 ⑥의 이메일로 이의를 제기할 수 있으며, BOAZ는 이를 검토해 결과를
          알려 드립니다.
        </li>
        <li className={styles.orderedListItem}>
          법정대리인이나 위임받은 사람 등 대리인을 통해서도 권리를 행사할 수 있습니다. 이때는
          위임장을 제출해야 합니다.
        </li>
      </ol>
    </section>

    <hr className={styles.divider} />

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>⑥ 개인정보 보호책임자</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>성명</th>
            <th>직책</th>
            <th>연락처</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>유제명</td>
            <td>BOAZ 27기 시각화 대표</td>
            <td>boaz.bigdata@naver.com</td>
          </tr>
        </tbody>
      </table>
    </section>

    <hr className={styles.divider} />

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>⑦ 권익침해 구제방법</h2>
      <p className={styles.sectionText}>
        개인정보 침해에 대한 신고나 상담이 필요하면 아래 기관에 문의할 수 있습니다.
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>기관</th>
            <th>홈페이지</th>
            <th>전화</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>개인정보분쟁조정위원회</td>
            <td>
              <ExternalLink href="https://www.kopico.go.kr" label="www.kopico.go.kr" />
            </td>
            <td>1833-6972</td>
          </tr>
          <tr>
            <td>개인정보침해신고센터</td>
            <td>
              <ExternalLink href="https://privacy.kisa.or.kr" label="privacy.kisa.or.kr" />
            </td>
            <td>(국번 없이) 118</td>
          </tr>
          <tr>
            <td>대검찰청</td>
            <td>
              <ExternalLink href="https://www.spo.go.kr" label="www.spo.go.kr" />
            </td>
            <td>(국번 없이) 1301</td>
          </tr>
          <tr>
            <td>경찰청</td>
            <td>
              <ExternalLink href="https://ecrm.police.go.kr" label="ecrm.police.go.kr" />
            </td>
            <td>(국번 없이) 182</td>
          </tr>
        </tbody>
      </table>
    </section>

    <hr className={styles.divider} />

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>⑧ 시행일</h2>
      <p className={styles.sectionText}>이 개인정보 처리방침은 2026년 11월 30일부터 적용됩니다.</p>
    </section>
  </>
);

export default PrivacyPolicy20261130;
