import PageHeading from "@/components/common/PageHeading"
import Image from "next/image"

const BlogDetail = () => {
  return (
    <main className="min-h-[53vh] p-24 py-8">
      <PageHeading title='Explore the blogs' subTitle="The Shop" />
      <div className="px-4 mx-auto pt-10 pb-10">
        <div className="mb-4 md:mb-0 w-full max-w-screen-lg mx-auto relative" style={{height: '24em'}}>
          <div className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))'}}></div>
          <Image
            src="https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=683,width=1024,metadata=copyright,format=webp/wp-content/uploads/2023/02/bloomscape_19-spring-lifestye-10-1.jpg"
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            width={1024}
            height={683}
            alt=''
          />
          <div className="p-4 absolute bottom-0 left-0 z-10">
            <a href="#"
              className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Plants</a>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              How to Care for Rare Indoor Plants
            </h2>
            <div className="flex mt-3">
              <Image
                src="https://img.freepik.com/free-icon/user_318-563642.jpg?w=360"
                className="h-10 w-10 rounded-full mr-2 object-cover"
                width={360}
                height={360}
                alt=''
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
                <p className="font-semibold text-gray-400 text-xs"> 14 Aug </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-1 max-w-screen-lg mx-auto text-lg leading-relaxed text-brand-green">
          <h2 className="text-2xl font-semibold mb-4 mt-4">INTRODUCTION</h2>
          <p className="pb-6">
            Rare indoor plants are a delightful addition to any home or office.
            Their unique features and scarcity make them a prized possession for plant enthusiasts.
            However, taking care of rare indoor plants requires special attention and knowledge.
            In this article, we will explore some essential tips to help you care for your rare indoor plants and keep them thriving.
          </p>

          <div className="pb-6">
            <h2 className="text-xl font-semibold mb-4 mt-4">1. RESEARCH THE PLANT</h2>
            Before bringing home a rare indoor plant, it&apos;s crucial to research its specific care requirements.
            Each rare plant has different needs in terms of light, temperature, humidity, and watering.
            Understanding these requirements will help you create an ideal environment for your plant to grow.
          </div>

          <div className="pb-6">
            <h2 className="text-xl font-semibold mb-4 mt-4">2. PROVIDE ADEQUATE LIGHTING</h2>
            Proper lighting is vital for the health and growth of indoor plants.
            Some rare plants prefer bright, indirect light, while others thrive in low-light conditions.
            Ensure that you place your rare plant in a location that provides the right amount of light based on its needs.
          </div>

          <div className="pb-6">
            <h2 className="text-xl font-semibold mb-4 mt-4">3. MAINTAIN OPTIMAL TEMPERATURE AND HUMIDITY</h2>
            Temperature and humidity levels play a significant role in the well-being of rare indoor plants.
            Most rare plants prefer a temperature range between 60-75°F (15-24°C).
            Additionally, some rare plants require higher humidity levels.
            You can increase humidity by using a humidifier or placing a tray of water near the plant.
          </div>

          <div className="pb-6">
            <h2 className="text-xl font-semibold mb-4 mt-4">4. WATERING AND SOIL</h2>
            Proper watering techniques are crucial for rare indoor plants.
            It&apos;s essential to understand the watering needs of your plant and avoid overwatering or underwatering.
            Some rare plants may require well-draining soil, while others prefer a more moisture-retentive mix.
            Ensure that you use the right type of soil and water your plant accordingly.
          </div>

          <div className="pb-6">
            <h2 className="text-xl font-semibold mb-4 mt-4">5. PRUNING AND MAINTENANCE</h2>
            Regular pruning helps maintain the health and shape of rare indoor plants.
            Remove any dead or yellowing leaves, trim overgrown branches, and promote bushier growth.
            Additionally, keep an eye out for pests and diseases, and take immediate action if you notice any signs of infestation.
          </div>

          <div className="pb-6">
            <h2 className="text-xl font-semibold mb-4 mt-4">6. FERTILISING</h2>
            Rare indoor plants may benefit from occasional fertilisation.
            However, it&apos;s essential to use a diluted, balanced fertiliser and follow the recommended dosage.
            Over-fertilisation can harm the plant, so it&apos;s crucial to be cautious and monitor the plant&apos;s response.
          </div>

          <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor
            expression
            unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence.
            Steepest speaking up attended it as. Made neat an on be gave show snug tore.
          </div>

          <div className="pb-6">Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me
            everything.
            Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage
            is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry
            among. Delightful remarkably new assistance saw literature mrs favourable.</div>

          <h2 className="text-2xl font-semibold mb-4 mt-4">CONCLUSION</h2>
          <p className="pb-6">
            Caring for rare indoor plants can be a rewarding and enjoyable experience.
            By researching the plant, providing proper lighting, maintaining optimal temperature and humidity, watering correctly, pruning regularly, and fertilizing with care, you can ensure the health and longevity of your rare indoor plants.
            Remember to give your plants the love and attention they deserve, and they will thrive and beautify your space for years to come.
          </p>

        </div>
      </div>
    </main>
  )
}
export default BlogDetail