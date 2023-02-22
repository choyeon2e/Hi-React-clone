import React from "react";
import Clayful from "clayful/client-js";

function LandingPage() {
  const product = Clayful.Product;
  const options = {
    query: {
      page: 1,
    },
  };

  product.list(options, function (err, response) {
    if (err) {
      console.log(err);
    }

    console.log(response);
  });

  return <div>LandingPage</div>;
}

export default LandingPage;
