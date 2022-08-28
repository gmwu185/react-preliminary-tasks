import BreadcrumbHeader from './BreadcrumbHeader';

function About() {
  return (
    <>
      <BreadcrumbHeader
        bgImgPath="https://tour.klcg.gov.tw/media/klcgtour/attractions/23424275/42b8306d-4322-40ef-a112-4d1dd0070a1b.jpg"
        atPage="關於基隆"
        title="基隆的歷史與文化"
      />
      <section className="ftco-section ftco-about">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-12 about-intro">
              <div className="row">
                <div className="col-md-6 d-flex align-items-stretch">
                  <div
                    className="img d-flex w-100 align-items-center justify-content-center"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/about_cover.jpg)` }}
                  ></div>
                </div>
                <div className="col-md-6 pl-md-5 py-5">
                  <div className="row justify-content-start pb-3">
                    <div className="col-md-12 heading-section ">
                      <h2 className="mb-4">基隆的歷史與文化</h2>
                      <p>
                        基隆市古名雞籠，以谷灣之天然港灣著名，是臺灣最北端的都市，位於市中心的基隆港則是北臺灣首要航運樞紐，亦因氣候多雨而別稱雨港、雨都，與高雄並列為臺灣兩大港市。基隆在日治時代興起時，日本當局也同時發展觀光事業，當時的重要基隆景點有基隆港、市區的高砂公園、以及大沙灣海水浴場等。後來市政府建造現在的文化中心基隆景點，而在火車站前的小艇碼頭有遊艇提供遊覽基隆港的服務，在此還可以搭遊艇出外海至基隆嶼一遊基隆景點，從外海遠望整個北海岸。另外在外木山和瑞芳深澳等漁港有海釣船服務，約傍晚時分出海，次日清晨六點回航，可以垂釣一整晚或欣賞海上之基隆景點的夜景。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
