
import { CollabsSection } from "./component/MainSection/CollabrationSection/CollabsSection";
import { ConstructionSection } from "./component/MainSection/ConstructionSection/ConstructionSection";
import { Faqs } from "./component/MainSection/FAQs/Faqs";
import { Gallery } from "./component/MainSection/Gallery/Gallery";
import { GlimpseSection } from "./component/MainSection/GlimpseSection/GlimpseSection";
import { HeroSection } from "./component/MainSection/HeroSection";
import { InteriorSection } from "./component/MainSection/InteriorSection/InteriorSection";
import { Services } from "./component/MainSection/Services/Services";
import { ServicesOffered } from "./component/MainSection/ServicesOffered/ServicesOffered";
import { TableSection } from "./component/MainSection/TableSection/TableSection";
import { Offer } from "./component/Offer/Offer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full justify-between bg-white">
       <HeroSection bannerimage={'/assets/images/background.jpeg'} altText ={'Craft Your Dream Home: Build Your Vision, One Brick at a Time!'}/>
       <ConstructionSection />
       <InteriorSection  />
       <Services />
       <GlimpseSection />
       <Gallery />
       <TableSection />
       <Offer />
       <ServicesOffered />
       <Faqs />
       <CollabsSection />
    </main>
  );
}
