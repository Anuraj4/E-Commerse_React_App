import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={'privacy policy'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p><strong>1. Information Collection:</strong> We collect your name, email, address, and payment info for orders and service improvement.</p>
          <p><strong>2. Use of Information:</strong> Your data helps us process orders, communicate with you, and improve services.</p>
          <p><strong>3. Sharing Information:</strong> We don’t sell your info. Trusted partners may access it only for payments, orders, or marketing under confidentiality.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
