import './App.css'
import logo from './images/logo.png'
import DropBtn from './components/DropBtn';
import MultipleItems from './components/MultipleItems';
import JoinCard from './components/JoinCard';
import Question from './components/Question';
import Input from './components/Input';


function App() {

  const backgroundImageStyle = {
    backgroundImage: "radial-gradient(circle at center, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%), url('https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg')",
    backgroundSize: "cover",    // equivalent to `bg-cover`
    backgroundPosition: "center", // equivalent to `bg-center`
    backgroundRepeat: "no-repeat", // equivalent to `bg-no-repeat`
    height: "100vh",            // equivalent to `h-screen`
    backgroundAttachment: "", // equivalent to `bg-fixed`
  };

  const joins = [
    {
      heading : "Enjoy on your TV",
      text : "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
    },
    {
      heading : "Download your shows to watch offline",
      text : "Save your favourites easily and always have something to watch."
    },
    {
      heading : "Watch everywhere",
      text : "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
    },
    {
      heading : "Create profiles for kids",
      text : "Send kids on adventures with their favourite characters in a space made just for them — free with your membership."
    },
  ]

  const faq = [
    "FAQ", "Helpline", "Media Center", "Account", 
    "Investor Relations", "Jobs", "Ways to Watch", "Terms of Use",
    "Privacy", "Cookie Preference", "Corporate Information", "Contact us",
    "Speed Test", "Legal Notice", "Only on Netflix"
  ]

  const ques = [
    {
      que: "What is Netflix?",
      ans: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.  
       You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`
    },
    {
      que: "How much does Netflix costs?",
      ans: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
      que: "Where can I watch?",
      ans: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
      que: "How can I cancel?",
      ans: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      que: "What can I watch on Netflix?",
      ans: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
      que: "Is Netflix good for kids?",
      ans: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. <br/> <br/> Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
  ]

  const ImgLinks = [
    {
      imgSrc: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png"
    },
    {
      imgSrc: "https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"
    },
    {
      imgSrc: "https://www.tallengestore.com/cdn/shop/products/Cult_Classics_Movie_Poster_-_Deewar_-_Amitabh_Bachchan_-_Tallenge_Bollywood_Poster_Collection_06a8c81a-4122-4cf7-8670-76373b4b627f.jpg?v=1569358579"
    },
    {
      imgSrc: "https://5.imimg.com/data5/SELLER/Default/2024/7/434029007/AG/DC/RZ/95499250/30x40-film-poster.jpg"
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_s11214cj0Z8H_o9SkPsIArI8tsF4SIQZg&s"
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wT5ayfO9mk-9pghpeBf3_PevRid76Nk-Cg&s"
    },
    {
      imgSrc: "https://parade.com/.image/t_share/MTkwNTgxMjk2NzkxODg5MDIx/parasite2.jpg"
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRdRrAJ2kIRKpRrR5SQ3sxOD--wyrGkWQPBQ&s"
    },
    {
      imgSrc: "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000"
    },
    {
      imgSrc: "https://cdn.pastemagazine.com/www/blogs/lists/1976.jpg"
    }
  ]

  return (
    <div className='container w-full min-h-[300vh] bg-black text-white relative'>

      <div className='main w-full h-screen py-[20px] flex flex-col align-sub bg-dimmed' style={backgroundImageStyle}>

        <div className='nav flex justify-between px-[10%]'>
          <img src={logo} className='w-[180px]' />
          <div className='flex gap-[20px]'>
            <DropBtn title='English' options={['English', 'Hindi']}/>
            <button className='bg-red-600 px-[10px] rounded-sm h-[30px] w-fit hover:bg-red-700 transition duration-300'>Sign In</button>
          </div>
        </div>


        <div className='text-center flex flex-col gap-[20px] self-center pt-[10%]'>
          <h1 className='text-6xl font-extrabold'>Unlimited movies,<br/> TV shows and more</h1>
          <h2 className='text-xl font-bold'>Start at $149. Cancel any time.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        </div>

        <div className='self-center inp flex gap-[5px] pt-[15px]'>
          <Input text="Enter address"/>
          <button className='bg-red-600 text-2xl h-[50px] px-[10px] rounded-sm hover:bg-red-700 transition duration-300'>Get Started &gt; </button>
        </div>
      </div>

      <div className='down absolute w-full top-[99vh] px-[10%]'> <br /> </div>
      <div className='px-[10%] space-y-[50px]'>
        <div className='text-2xl pt-[20px] font-bold'>
          Trending Now
        </div>
        

        <div className='flex flex-row gap-[20px]'>
          <DropBtn title="India" options={["India", "Global"]}/>
          <DropBtn title="Movies" options={["Movies", "TV Shows"]} />
        </div>

        <MultipleItems props={ImgLinks}/>

      </div>

      <div className='w-full pt-[5%] px-[10%]'>
        <h1 className='text-2xl py-[20px] font-bold'>More reasons to join</h1>
        <div className='flex flex-row justify-between'>
          {
            joins.map((join) => {
              return (
                <JoinCard heading={join.heading} text={join.text}/>
              )
            })
          }
        </div>
      </div>

      <div className='w-full pt-[5%] px-[10%]'>
        <h1 className='text-2xl py-[20px] font-bold'>Frequently Asked Questions</h1>
        {
            ques.map((head) => {
              return (
                <Question que={head.que} ans={head.ans} />
              )
            })
        }
      </div>

      <div className='w-full pt-[5%] px-[10%] flex flex-col gap-[5px]'>
        <h1 className='self-center'>Ready to watch? Enter your email to create or restart your membership.</h1>
        <div className='self-center inp flex gap-[5px] pt-[15px]'>
          <Input text="Email Address"/>
          <button className='bg-red-600 text-2xl h-[50px] px-[10px] rounded-sm hover:bg-red-700 transition duration-300'>Get Started &gt; </button>
        </div> 
      </div>

      <h1 className='w-full pt-[5%] px-[10%] text-gray-400'>Questions? Call <u>000-800-919-169</u></h1>

      <div className='w-full gap-[10px] pt-[5%] px-[10%] text-gray-400 grid grid-cols-4 grid-rows-4'>
        {
          faq.map((fa) => {
            return (
              <u className='cursor-pointer'>{fa}</u>
            )
          })
        }
      </div>

      <div className='w-full pt-[5%] px-[10%]'>
        <DropBtn title="English" options={["English", "Hindi"]}/>
      </div>

      <div className='w-full py-[5%] px-[10%] text-gray-400'>Netflix India</div>
      
    </div>
  )
}

export default App
