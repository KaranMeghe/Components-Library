import Accordion from "../Components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "12hj",
      label: "Amazon Pay",
      content:
        "Amazon Pay is upi service by Amazon. Amazon Pay is an online payment service that makes checkout on your site fast and secure for hundreds of millions of Amazon customers around the world.",
    },
    {
      id: "23k",
      label: "Paytm",
      content:
        "Paytm is Payment Service started by indian startup paytm. Paytm - India's Most Popular Platform for Money Transfer, BHIM UPI Payments, Recharges and other online payments ·",
    },
    {
      id: "2ed",
      label: "Phone Pay",
      content:
        "Phone pay is Payment Service started by indian startup. PhonePe is a Digital Wallet & Online Payment App that allows you to make instant Money Transfers with UPI. ",
    },
  ];
  return <Accordion items={items} />;
};

export default AccordionPage;
