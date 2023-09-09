import Image from "next/image"

const BlogDetail = () => {
  return (
    <main className="min-h-[53vh] p-24 py-8">
      <div className="pt-2 col-span-9 text-brand-green">
        <div className="pb-2 text-center">
          <h3 className="text-xl font-extralight leading-none">The Shop</h3>
          <h2 className="pd-2 text-4xl font-bold tracking-tighter font-heading leading-none mb-1">Explore the blogs</h2>
        </div>
      </div>
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
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <a href="#"
              className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Plants</a>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              As you likely already know, plants can really spruce up your space and add a new level of gorgeous decor to your home.
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

        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-lg mx-auto text-lg leading-relaxed">
          <p className="pb-6">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
            justice. Six draw
            you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages
            resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was
            outlived peculiar rendered led six.</p>

          <p className="pb-6">Difficulty on insensible reasonable in. From as went he they. Preference themselves me as
            thoroughly
            partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. In or
            attachment inquietude remarkably comparison at an. Is surrounded prosperous stimulated am me discretion
            expression. But truth being state can she china widow. Occasional preference fat remarkably now projecting
            uncommonly dissimilar. Sentiments projection particular companions interested do at my delightful. Listening
            newspaper in advantage frankness to concluded unwilling.</p>

          <p className="pb-6">Adieus except say barton put feebly favour him. Entreaties unpleasant sufficient few pianoforte
            discovered
            uncommonly ask. Morning cousins amongst in mr weather do neither. Warmth object matter course active law
            spring six. Pursuit showing tedious unknown winding see had man add. And park eyes too more him. Simple excuse
            active had son wholly coming number add. Though all excuse ladies rather regard assure yet. If feelings so
            prospect no as raptures quitting.</p>

          <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor
            expression
            unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence.
            Steepest speaking up attended it as. Made neat an on be gave show snug tore.
          </div>

          <p className="pb-6">Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me
            everything.
            Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage
            is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry
            among. Delightful remarkably new assistance saw literature mrs favourable.</p>

          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Uneasy barton seeing remark happen his has</h2>

          <p className="pb-6">Guest it he tears aware as. Make my no cold of need. He been past in by my hard. Warmly thrown
            oh he common
            future. Otherwise concealed favourite frankness on be at dashwoods defective at. Sympathize interested
            simplicity at do projecting increasing terminated. As edward settle limits at in.</p>

          <p className="pb-6">Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh.
            Hundred no
            prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced
            ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who
            connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding
            ask expense are compact. New all paid few hard pure she.</p>

          <p className="pb-6">Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at
            tastes really
            so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited
            elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By
            in cold no less been sent hard hill.</p>

          <p className="pb-6">Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and
            make two real
            miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient
            to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it
            without me.</p>

        </div>
      </div>
    </main>
  )
}
export default BlogDetail