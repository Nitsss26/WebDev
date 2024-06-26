import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import { PageWrapper } from "../page-wrapper"

export const metadata = {
  title: 'Contact - Digital Marketing Agency / Expert at SEO, SMO',
  description: 'All digital marketing services, seo, smo, PPC, web development.',
}
const Contact = () => {
  return (
    <>
      <PageWrapper>
        <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-100"} />
      </PageWrapper>
      <PageWrapper>
        <ContactAddress />
      </PageWrapper>
    </>
  )
}

export default Contact