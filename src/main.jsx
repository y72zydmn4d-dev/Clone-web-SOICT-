import React, {useEffect, useState} from 'react'
import {createRoot} from 'react-dom/client'
import {news, events, viMenu, enMenu, pageTitles} from './data'
import './styles.css'

const A = ({href, children, className=''}) => <a className={className} href={href}>{children}</a>
const current = () => window.location.pathname

function Header({english}) {
  const [open, setOpen] = useState(null)
  const [mobile, setMobile] = useState(false)
  const menu = english ? enMenu : viMenu
  return <>
    <header className="site-header">
      <div className="topbar wrap">
        <A href={english ? '/en/' : '/'} className="brand"><img src="/assets/logo-soict-hust.png" alt="SoICT"/></A>
        <div className="school-name"><span>ĐẠI HỌC BÁCH KHOA HÀ NỘI</span><strong>{english ? 'SCHOOL OF INFORMATION AND COMMUNICATIONS TECHNOLOGY' : 'TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG'}</strong></div>
        <div className="header-actions"><div className="languages"><A href="/" aria-label="Vietnamese"><img src="/assets/source/vi.png" alt="VN"/></A><A href="/en/" aria-label="English"><img src="/assets/source/en.png" alt="EN"/></A></div><form className="search-form" action="/" onSubmit={e=>e.preventDefault()}><input aria-label="Search" placeholder="Search…"/><button aria-label="Submit search">⌕</button></form></div>
        <button className="hamburger" onClick={()=>setMobile(!mobile)} aria-expanded={mobile} aria-label="Menu"><i></i><i></i><i></i></button>
      </div>
      <nav className={'main-nav ' + (mobile ? 'open' : '')}>
        <div className="wrap nav-wrap">
          {menu.map(([label,children], index)=><div className={'nav-item '+(open===index?'hovered':'')} key={label} onMouseEnter={()=>setOpen(index)} onMouseLeave={()=>setOpen(null)}>
            <button onClick={()=>setOpen(open===index?null:index)}>{label}<b>⌄</b></button>
            <div className="dropdown">{children.map(([name,href])=><A href={href} key={href}>{name}</A>)}</div>
          </div>)}
        </div>
      </nav>
    </header>
  </>
}

function SectionTitle({children, dark=false}){return <h2 className={'section-title '+(dark?'light':'')}>{children}</h2>}

const themeOptions = [
  ['default', 'Original', '◆'],
  ['summer', 'Summer', '☀'],
  ['winter', 'Winter', '❄'],
]

function ThemeSwitcher({theme, setTheme}) {
  const [open, setOpen] = useState(false)
  const active = themeOptions.find(([name])=>name===theme) || themeOptions[0]
  return <div className={'theme-switcher '+(open?'is-open':'')}>
    <button className="theme-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Choose seasonal theme"><span>{active[2]}</span><em>{active[1]}</em></button>
    <div className="theme-menu" role="menu">{themeOptions.map(([name,label,icon])=><button key={name} className={theme===name?'active':''} onClick={()=>{setTheme(name);setOpen(false)}} role="menuitem"><span>{icon}</span>{label}</button>)}</div>
  </div>
}

function SeasonalDecor({theme}) {
  if(theme==='winter') return <div className="season-layer" aria-hidden="true"><div className="snowfall">{Array.from({length:28},(_,i)=><i key={i} style={{'--x':`${(i*37)%100}%`,'--delay':`${-(i%11)}s`,'--duration':`${8+(i%7)}s`,'--size':`${3+(i%4)}px`}}/> )}</div><div className="santa"><span>🎅</span><small>· ❄ ·</small></div></div>
  if(theme==='summer') return <div className="season-layer summer-layer" aria-hidden="true">{Array.from({length:12},(_,i)=><i key={i} style={{'--x':`${(i*41)%100}%`,'--delay':`${-(i%8)}s`}}/> )}</div>
  return null
}

function Home({english}) {
  const [slide, setSlide] = useState(0)
  useEffect(()=>{const id=setInterval(()=>setSlide(s=>(s+1)%(english?2:4)),7000);return()=>clearInterval(id)},[english])
  const copy = english ? {
    latest:'LATEST NEWS',events:'LATEST EVENTS', education:'EDUCATION – ADMISSION', cooperation:'COLLABORATION ACTIVITIES', alumni:'ALUMNI', say:'SAY ABOUT SOICT', about:'ABOUT US', video:'VIDEO', see:'SEE MORE'
  } : {latest:'TIN MỚI NHẤT',events:'SỰ KIỆN MỚI NHẤT', education:'ĐÀO TẠO – TUYỂN SINH', cooperation:'HỢP TÁC ĐỐI NGOẠI', alumni:'CỰU SINH VIÊN', say:'NÓI VỀ SoICT', about:'VỀ CHÚNG TÔI', video:'VIDEO',see:'Xem thêm'}
  const heroSlides = english ? [
    {image:'/assets/source/genai_cover-1.jpg', tone:'red', title:'School of Information and Communications Technology', detail:'Hanoi University of Science and Technology'},
    {image:'/assets/source/graduation-day-2026-banner-1.jpeg', tone:'dark', title:'Graduation Day 2026', detail:'School of Information and Communications Technology'}
  ] : [
    {image:'/assets/source/graduation-day-2026-banner-1.jpeg', tone:'red', title:'Tổng kết Graduation Day 2026', detail:'Trong 1 tuần lễ từ ngày 13/7 đến 17/7/2026, Trường đã tổ chức tổng cộng 66 hội đồng bảo vệ tốt nghiệp, chia theo 20 phân ban thuộc nhiều lĩnh vực chuyên môn khác nhau. Gần 1000 sinh viên đã hoàn thành phần bảo vệ đồ án tốt nghiệp, cột mốc quan trọng đánh dấu chặng đường cuối cùng trong hành trình học tập đại học.'},
    {image:'/assets/source/genai_cover-1.jpg', tone:'red', title:'Trường CNTT&TT, ĐH BKHN chính thức ra mắt chương trình đào tạo Kỹ sư chuyên sâu đặc thù đầu tiên tại Việt Nam về Trí tuệ Nhân tạo tạo sinh (Generative AI – Gen AI)', detail:''},
    {image:'/assets/source/471825529_992940219536028_473087589984639057_n.jpg', tone:'dark', title:'SoICT Hackathon 2024 do Trường CNTT&TT, cùng với NAVER, Samsung và Tiki phối hợp tổ chức dành cho sinh viên và học viên cao học trên toàn quốc, đã chính thức khép lại', detail:''},
    {image:'/assets/source/slide-banner.jpg', tone:'red', title:'NHÓM NGÀNH KHOA HỌC MÁY TÍNH VÀ HỆ THỐNG THÔNG TIN TIẾP TỤC ĐỨNG VỊ TRÍ THỨ NHẤT TRONG SỐ CÁC TRƯỜNG ĐẠI HỌC CÔNG LẬP TẠI VIỆT NAM, XẾP HẠNG 451-500 THẾ GIỚI', detail:''}
  ]
  const hero = heroSlides[slide % heroSlides.length]
  return <main>
    <section className="hero">
      <div className="hero-bg" style={{backgroundImage:`url(${hero.image})`}}/>
      <div className="wrap hero-content"><div className={'hero-box '+hero.tone}><h1>{hero.title}</h1>{hero.detail&&<p>{hero.detail}</p>}<A className="hero-button" href="/soict30">{english?'SEE MORE':'XEM THÊM'}</A></div></div>
      <button className="hero-arrow previous" onClick={()=>setSlide((slide-1+heroSlides.length)%heroSlides.length)} aria-label="Previous slide">‹</button>
      <button className="hero-arrow next" onClick={()=>setSlide((slide+1)%heroSlides.length)} aria-label="Next slide">›</button>
      <div className="hero-dots">{heroSlides.map((_,x)=><button key={x} className={x===slide?'active':''} onClick={()=>setSlide(x)} aria-label={`Slide ${x+1}`}/>)}</div>
    </section>
    <section className="wrap news-section"><SectionTitle>{copy.latest}</SectionTitle><div className="news-grid">{news.map((item)=><article className="news-card" key={item.title}><A href={item.href} className="thumb"><img src={item.image} alt=""/><span>{item.type}</span></A><div className="card-body"><h3><A href={item.href}>{item.title}</A></h3><p>{item.excerpt}</p></div></article>)}</div><div className="more-strip"><A href="/tin-tuc">Xem thêm tin tức</A></div></section>
    <section className="events"><div className="wrap"><SectionTitle dark>{copy.events}</SectionTitle><div className="event-list">{events.slice(0,4).map((event,i)=><A href="/su-kien" className="event-card" key={event.title}><img src={event.image} alt=""/><div className="event-body"><span className="event-date"><b>{['29','17','03','15'][i]}</b><small>TH {['09','08','08','07'][i]}</small></span><h3>{event.title}</h3><p>Thời gian: {['2:00 PM','11:30 AM','8:00 AM','1:45 PM'][i]} · 2026</p></div></A>)}</div></div><div className="more-strip red"><A href="/su-kien">Xem thêm sự kiện</A></div></section>
    <FeatureBlock title={copy.education} lead={english?'The School offers more than 20 high-quality training programs in the fields of Computer Science, Computer Engineering, and Data Science & Artificial Intelligence.':'Năm 2022, Tổ chức Giáo dục Quacquarelli Symonds (viết tắt QS – Vương quốc Anh) đã đánh giá và xếp chất lượng đào tạo và nghiên cứu của ĐHBK Hà Nội trong các lĩnh vực mà Trường đang đảm nhận thuộc nhóm hạng từ 401 đến 450 trên toàn Thế giới, tiếp tục giữ vị trí số 1 tại Việt Nam.'} cards={english?[['ACADEMIC PROGRAMS','The School offers quality programs from undergraduate to doctoral levels.','/assets/source/152127_1-400x267.jpg'],['ENLIGHTENING YOUR DIGITAL FUTURE WITH SOICT','Discover an environment where technology and ambition meet.','/assets/source/IMG_8268_2-001-400x268.jpg']]:[['CHƯƠNG TRÌNH ĐÀO TẠO','Trường hiện đang cung cấp hơn 20 chương trình đào tạo chất lượng cao thuộc 3 hệ đại học, ThS và TS; trong đó, có chương trình được thị trường lao động quốc tế đón nhận với hơn 60% sinh viên tốt nghiệp làm việc ở nước ngoài.','/assets/source/152127_1-400x267.jpg'],['KIẾN TẠO TƯƠNG LAI VỚI SoICT','Thương hiệu Kỹ sư CNTT Bách khoa đã vượt ra khỏi biên giới nước nhà, và ngày càng chứng minh được chất lượng trên trường Quốc tế.','/assets/source/IMG_8268_2-001-400x268.jpg']]}/>
    <FeatureBlock shade title={copy.cooperation} lead={english?'The School highly appreciates international and corporate partnerships in education, research, and technology transfer.':'Trường CNTT&TT luôn coi trọng các hoạt động hợp tác quốc tế và hợp tác doanh nghiệp để nâng cao chất lượng các hoạt giảng dạy, nghiên cứu và chuyển giao công nghệ.'} cards={english?[['ACADEMIC PARTNERSHIPS','The School maintains partnerships with many prestigious universities and research institutes.','/assets/source/Screen-Shot-2019-05-02-at-1.51.23-PM-400x318.png'],['ENTERPRISE PARTNERSHIPS','A network of technology companies supports education and research.','/assets/source/DJI_0030-fixed2-mini-20190727T100030844048.jpg']]:[['CÁC TRƯỜNG ĐỐI TÁC','Trường CNTT&TT có quan hệ hợp tác với nhiều trường đại học và viện nghiên cứu uy tín trên Thế giới.','/assets/source/Screen-Shot-2019-05-02-at-1.51.23-PM-400x318.png'],['DOANH NGHIỆP ĐỐI TÁC','Đào tạo và nghiên cứu rất cần sự hợp tác thực chất với cộng đồng doanh nghiệp.','/assets/source/DJI_0030-fixed2-mini-20190727T100030844048.jpg']]}/>
    <section className="wrap alumni"><SectionTitle>{copy.alumni}</SectionTitle><div className="alumni-grid">{[['Hoàng Việt Anh – Chỉ có một tình yêu duy nhất','/assets/source/205feec3d18738d96196.jpg'],['Lữ Thành Long – Thủ lĩnh công nghệ','/assets/source/Lu-Thanh-Long.jpg'],['Nguyễn Hà Đông – Cha đẻ Flappy Bird “náo loạn” Thế giới','/assets/source/nam-2014-nguyen-ha-dong-va-flappy-bird-trong-hanh-trinh-mang-den-nhung-dieu-ky-dieu--400x267.jpg'],['Hùng Trần – Tấm gương khởi nghiệp người Việt tại Silicon Valley','/assets/source/hungtran-400x250.jpg'],['Vương Quang Khải – người đứng sau Zalo và 100 triệu người dùng','/assets/source/VuongQuangKhai-1225-1419300015-400x254.jpg']].map(([x,image])=><article key={x}><img className="portrait" src={image} alt=""/><div className="alumni-copy"><span>{english?'ALUMNI':'CỰU SINH VIÊN'}</span><h3>{x}</h3><p>{english?'SoICT alumni inspiring Vietnam’s digital future.':'Những câu chuyện truyền cảm hứng từ cựu sinh viên Trường CNTT&TT.'}</p></div></article>)}</div></section>
    <section className="quotes"><div className="wrap"><SectionTitle dark>{copy.say}</SectionTitle><div className="quote-row"><img src="/assets/source/President_Mr.-Kim-In-Soo-150x250.jpg" alt="Ông Kim In Soo"/><blockquote>“Sinh viên Trường CNTT&TT không chỉ được biết đến với nền tảng kiến thức kỹ thuật sắc bén và sự thích ứng tuyệt vời với bất kỳ nhiệm vụ nào được giao, mà còn được đánh giá cao bởi tư duy phản biện và sáng tạo. Trong SVMC, sinh viên ĐHBK Hà Nội nói chung và sinh viên Trường CNTT&TT nói riêng luôn giữ các vị trí quan trọng.”<footer>Ông Kim In Soo <small>Tổng Giám đốc Trung tâm Nghiên cứu và Phát triển Điện thoại Di động Samsung Việt Nam (SVMC)</small></footer></blockquote></div></div></section>
    <section className="facts wrap"><SectionTitle>{copy.about}</SectionTitle><div className="fact-grid"><div><span>QS ranking 2023</span><strong>450 – 500</strong><p>trên Thế giới trong nhóm ngành Khoa học Máy tính và Hệ thống Thông tin</p></div><div><span>Sinh viên thuộc TOP</span><strong>1%</strong><p>điểm cao nhất Khối A Toàn quốc</p></div><div><span>Sinh viên</span><strong>6.000+</strong></div><div><span>Chương trình đào tạo</span><strong>17+</strong><p>thuộc các hệ đào tạo cử nhân, kỹ sư, thạc sỹ khoa học, tiến sỹ</p></div><div><span>Đối tác</span><strong>500+</strong><p>các trường đại học, viện nghiên cứu, tập đoàn, công ty trong nước và quốc tế</p></div></div></section>
    <section className="video-section"><div className="wrap"><SectionTitle>{copy.video}</SectionTitle><div className="video-grid">{[['INNOVATION DAY 2026','/assets/source/video-innovation.jpg'],['TUẦN LỄ KỶ NIỆM 30 NĂM THÀNH LẬP TRƯỜNG CNTT&TT, ĐHBK HÀ NỘI','/assets/source/video-soict30.jpg'],['GIỚI THIỆU CHƯƠNG TRÌNH ĐÀO TẠO CNTT VIỆT – NHẬT','/assets/source/video-vj.jpg']].map(([x,image])=><div className="video" style={{backgroundImage:`linear-gradient(rgba(4,21,54,.35),rgba(4,21,54,.35)),url(${image})`}} key={x}><span>▶</span><h3>{x}</h3></div>)}</div></div><div className="more-strip red"><A href="/video">Xem thêm video</A></div></section>
  </main>
}

function FeatureBlock({title,lead,cards,shade}) { return <section className={'feature '+(shade?'feature-shade':'')}><div className="wrap"><SectionTitle dark={shade}>{title}</SectionTitle><p className="lead">{lead}</p><div className="feature-grid">{cards.map(([title,text,image],i)=><A key={title} href={i?'/kien-tao-tuong-lai-voi-soict.html':'/dao-tao/gioi-thieu-chung'} className="feature-card"><div className="feature-image" style={{backgroundImage:`url(${image})`}}/><div><h3>{title}</h3><p>{text}</p><em>(xem tiếp)</em></div></A>)}</div></div></section> }

function InnerPage({english}) {
  const path = current().replace(/^\/(en\/)?/,'').replace(/\/$/,'')
  const title = english ? (path.split('/').pop().replace(/[-.]/g,' ').replace(/\b\w/g,x=>x.toUpperCase()) || 'School of Information and Communications Technology') : (pageTitles[path] || path.split('/').pop().replace(/[-.]/g,' ').replace(/\b\w/g,x=>x.toUpperCase()))
  const isNews = /tin-tuc|su-kien|tuyen-dung|category/.test(path)
  const isPeople = /can-bo|officer/.test(path)
  const item = news.find(x=>x.href.slice(1)===path)
  if(item) return <main className="inner"><div className="page-banner"><div className="wrap"><p>Trang chủ / Tin tức</p><h1>{item.title}</h1></div></div><article className="detail wrap"><p className="meta">TIN BÀI · 18/09/2026</p><img src={item.image} alt=""/><p className="intro">{item.excerpt}</p><p>Thông tin chi tiết được Trường Công nghệ Thông tin và Truyền thông công bố. Nội dung bài viết được trình bày theo bố cục của trang tin SoICT.</p></article></main>
  return <main className="inner"><div className="page-banner"><div className="wrap"><p>{english?'Home':'Trang chủ'} / {title}</p><h1>{title}</h1></div></div><div className="wrap page-content">{isPeople ? <People english={english}/> : isNews ? <Listings title={title}/> : <Info title={title} english={english}/>}</div></main>
}
function Listings({title}){return <><div className="tabs"><button className="selected">{title}</button><button>THÔNG BÁO</button><button>TIN BÀI</button></div><div className="listing">{[...news,...news].map((item,i)=><article key={i}><img src={item.image} alt=""/><div><span>{item.type}</span><h2><A href={item.href}>{item.title}</A></h2><p>{item.excerpt}</p><A href={item.href}>Xem thêm →</A></div></article>)}</div><div className="pagination"><button>‹</button><button className="active">1</button><button>2</button><button>3</button><button>›</button></div></>}
function People({english}){const names=english?['Assoc. Prof. Pham Minh Tuan','Assoc. Prof. Nguyen Duc Anh','Dr. Nguyen Thu Trang','Dr. Le Quang Huy','Dr. Tran Minh Chau','Dr. Do Van Binh']:['PGS. TS. Phạm Minh Tuấn','PGS. TS. Nguyễn Đức Anh','TS. Nguyễn Thu Trang','TS. Lê Quang Huy','TS. Trần Minh Châu','TS. Đỗ Văn Bình'];return <div className="people">{names.map((n,i)=><article key={n}><div className="avatar">{n.split(' ').at(-1)[0]}</div><h2>{n}</h2><p>{english?'Lecturer and researcher':'Giảng viên, nhà nghiên cứu'}</p><a href="mailto:vp@soict.hust.edu.vn">vp@soict.hust.edu.vn</a></article>)}</div>}
function Info({title,english}){return <article className="info"><h2>{title}</h2><div className="underline"/><p>{english?'School of Information and Communications Technology, Hanoi University of Science and Technology, is one of Vietnam’s leading institutions in education, research, and technology transfer.':'Trường Công nghệ Thông tin và Truyền thông – Đại học Bách khoa Hà Nội là một trong những đơn vị hàng đầu về đào tạo, nghiên cứu khoa học và chuyển giao công nghệ trong lĩnh vực công nghệ thông tin và truyền thông.'}</p><img src="/assets/soict30-banner.jpeg" alt="SoICT"/><h3>{english?'Information':'Thông tin'}</h3><p>{english?'The content in this section follows the public information architecture of the official SoICT site.':'Nội dung tại đây được tổ chức theo cấu trúc thông tin công khai của website chính thức Trường CNTT&TT.'}</p></article>}

function Footer({english}){return <footer className="site-footer"><div className="footer-bg"/><div className="wrap footer-grid"><div><h3>{english?'UNITS':'CÁC ĐƠN VỊ'}</h3><A href="/bo-phan/khoa-hoc-may-tinh">Khoa Khoa học Máy tính</A><A href="/bo-phan/ky-thuat-may-tinh">Khoa Kỹ thuật Máy tính</A><A href="/bo-phan/van-phong-truong">Văn phòng Trường</A><A href="/bo-phan/trung-tam-may-tinh-va-thuc-hanh">Trung tâm Máy tính và Thực hành</A><A href="/bo-phan/trung-tam-doi-moi-sang-tao">Trung tâm Đổi mới Sáng tạo</A></div><div><h3>{english?'ACADEMIC PROGRAMS':'CHƯƠNG TRÌNH ĐÀO TẠO'}</h3><A href="/category/dao-tao/he-dai-hoc">{english?'Undergraduate':'Hệ đại học'}</A><A href="/category/dao-tao/he-thac-sy">{english?'Master':'Hệ thạc sỹ'}</A><A href="/dao-tao/dao-tao-tien-sy">{english?'Doctoral':'Hệ tiến sỹ'}</A></div><div><h3>{english?'SYSTEMS AND RESOURCES':'HỆ THỐNG VÀ TÀI NGUYÊN'}</h3><a href="https://qldt.hust.edu.vn/">Hệ thống Quản lý Đào tạo</a><A href="/bieu-mau-va-quy-dinh-danh-cho-sinh-vien.html">Các mẫu biểu dành cho sinh viên</A></div><address><p>☎ &nbsp; (+84) 24 3869 2463</p><p>✉ &nbsp; vp@soict.hust.edu.vn</p><p>Văn phòng Trường CNTT&TT<br/>Phòng 505, Nhà B1,<br/>Đại học Bách khoa Hà Nội</p><div className="social">f&nbsp;&nbsp;▶</div></address></div><div className="copyright wrap">Copyright © &nbsp; Trường Công nghệ Thông tin và Truyền thông <button onClick={()=>scrollTo({top:0,behavior:'smooth'})}>↑</button></div></footer>}
function App(){
  const english=current().startsWith('/en')
  const [theme,setTheme]=useState(()=>localStorage.getItem('soict-theme')||'default')
  useEffect(()=>{
    document.documentElement.dataset.theme=theme
    localStorage.setItem('soict-theme',theme)
  },[theme])
  useEffect(()=>{
    const targets=document.querySelectorAll('main > section:not(.hero), .feature-card, .news-card, .event-card')
    targets.forEach(el=>el.classList.add('reveal'))
    if(matchMedia('(prefers-reduced-motion: reduce)').matches){targets.forEach(el=>el.classList.add('revealed'));return}
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -40px'})
    targets.forEach(el=>observer.observe(el))
    return()=>observer.disconnect()
  },[])
  return <><Header english={english}/>{current()==='/'||current()==='/en/'?<Home english={english}/>:<InnerPage english={english}/>}<Footer english={english}/><ThemeSwitcher theme={theme} setTheme={setTheme}/><SeasonalDecor theme={theme}/></>
}
createRoot(document.getElementById('root')).render(<App/>)
