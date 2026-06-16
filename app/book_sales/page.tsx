import Navigation from "../components/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";

const booksCollection =[

    {
        id: 1,
        title: 'THE INVISIBLE MENTOR EFFECT',
        author: 'Nkeiruka Jane Nzekwe',
        description:`The Invisible Mentor Effect reveals why today's teenagers are increasingly shaped by influencers, algorithms, online personalities, friends, trends, and digital culture as well as what parents can do to reclaim their place as their child's most trusted guide.

                Inside this practical and easy-to-follow guide, you'll discover the same secret that is helping parents move from frustration and disconnection to deeper trust, stronger relationships, and lasting influence.

                 Not through control.

                Not through punishment.

                Not through endless battles over phones and screen time.

                But through a powerful shift in how influence is built and maintained during the teenage years.

                `,
        featureImage: '/assets/TheInvincibleMentor.jpeg',
        purchaseLink: '#',

    },

        {
        id: 2,
        title: 'BREAKING THE PHONE ADDICTION',
        author: 'Nkeiruka Jane Nzekwe',
        description:`
        Breaking The Phone Addiction is a practical, deeply insightful guide designed to help parents take back control without shouting,
         fighting, or damaging their relationship with their teen. Inside this book, you will discover why teens struggle with phone addiction,
         the psychology behind digital distractions, and how it impacts focus, sleep and behavior. You will also discover a simple but powerful 
         family phone plan that will restore your home's daily rhythm as well as detailed guide on how to handle resistance, emotional outbursts and negotiation attempts. 
         Inside the pages of this book, you will learn how to build family values and identity strong enough to resist peer pressure as well as receive scripts and strategies
          to help your teen cooperate without feeling punished.
        `,
        featureImage: '/assets/breaking_the_phone_addiction.jpeg',
        purchaseLink: 'https://selar.com/46308qs247',

    },
]


export default function Book(){

    return(
        <>
        <div className="min-h-screen bg-white font-sans">

            <Navigation/>

                 {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 bg-black text-white relative overflow-hidden">
       <div className="text-white text-4xl justify-center align-center">
        <h2 className="text-white text-7xl font-medium font-bold text-center"> BOOKS</h2>
       </div>
      </section>

    <div className=" bg-indigo-200 border-l-4 border-teal-600 py-8 md:p-8 rounded-r-xl shadow-sm mx-0">
  {booksCollection.map((collection, idx) => (
    <div 
  key={idx} 
  className={`grid ${idx % 2 === 0 ? 'bg-indigo-100' : 'bg-gray-200'} 
              grid-cols-1 md:grid-cols-2 gap-4 border-b-4 border-gray-400 py-8 px-4`}
>
        <div className="flex-1 ">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{collection.title}</h3>
          <p className="text-gray-600 mb-4">
           By {collection.author}
          </p>
          <Image
          src={collection.featureImage}
          alt='breaking the phone addiction'
          width={200}
          height={200}
          
          
          />

        </div>
         <div className="w-full md:w-auto">
         <p className=" mb-2 pt-4">
            {collection.description}<a href={collection.purchaseLink} className=" text-[#87CEEB]"><strong>Read More</strong></a>
        </p>
        <p className=" mb-10">
           
        </p>
       
            
        <Link href={collection.purchaseLink} target='_blank' className=" mt-10 px-8 py-4 bg-[#93c481] text-white rounded-full font-semibold hover:bg-teal-700 transition shadow-lg">
                Purchase a copy
          </Link>
        </div>
      </div>
  )
 
  )}
    </div>

    <Footer/>

</div>
        </>
    )
}