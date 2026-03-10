import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RestaurantHomePage } from "./ui/pages/RestaurantHomePage";
import { RestaurantMenuPage } from "./ui/pages/RestaurantMenuPage";
import { WineCellarPage } from "./ui/pages/WineCellarPage";
import { GalleryPage } from "./ui/pages/GalleryPage";
import { ContactPage } from "./ui/pages/ContactPage";
import { PrivateTastingPage } from "./ui/pages/PrivateTastingPage";
import { ReservationsPage } from "./ui/pages/ReservationsPage";
import { PrivacyPolicyPage } from "./ui/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./ui/pages/TermsOfServicePage";
import { ScrollToTop } from "./ui/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<RestaurantHomePage />} />
          <Route path="/menu" element={<RestaurantMenuPage />} />
          <Route path="/wine" element={<WineCellarPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/private-tasting" element={<PrivateTastingPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
