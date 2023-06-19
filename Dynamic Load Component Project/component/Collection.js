import React from "react";
import "./Collection.css";
import image1 from "../../src/images/8.jpeg";
import image2 from "../../src/images/3.jpeg";
import image3 from "../../src/images/1.jpeg";
import image4 from "../../src/images/5.jpeg";
import image5 from "../../src/images/2.jpeg";
import image6 from "../../src/images/4.jpeg";
import image7 from "../../src/images/6.jpeg";
import image8 from "../../src/images/7.jpeg";
import image9 from "../../src/images/download.jpeg";
import image10 from "../../src/images/macbook.jpeg";
import image11 from "../../src/images/ipadtouch.jpeg";
import image12 from "../../src/images/download1.jpeg";
import BestBudgetItems from "./BestBudgetItems";
// jsx
const Collection = () => {
  return (
    <div>
    <section id="collection" class="py-5">
      <div class="container">
        <div class="title text-center">
          <h2 class="position-relative d-inline-block" id="new">
            New Collection
          </h2>
        </div>

        <div class="row g-0">

          <div class="collection-list mt-4 row gx-0 gy-3">
            <div class="col-md-6 col-lg-4 col-xl-3 p-2 mob">
              <div class="collection-img position-relative">
                <img src={image1} class="w-100" alt="iPhone"></img>
                <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div class="text-center">
                <div class="rating mt-3">
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-capitalize my-1">iPhone</p>
                <span class="fw-bold">$ 999</span>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3 p-2 game">
              <div class="collection-img position-relative">
                <img src={image2} class="w-100" alt="Microsoft Surface" />
                <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div class="text-center">
                <div class="rating mt-3">
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-capitalize my-1">Microsoft Surface</p>
                <span class="fw-bold">$ 1219</span>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3 p-2 game">
              <div class="collection-img position-relative">
                <img src={image3} class="w-100" alt="Hp Printer" />
                <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div class="text-center">
                <div class="rating mt-3">
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-capitalize my-1">Hp Printer</p>
                <span class="fw-bold">$ 215</span>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3 p-2 shoe">
              <div class="collection-img position-relative">
                <img src={image4} class="w-100" alt="Shoe" />
                <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div class="text-center">
                <div class="rating mt-3">
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-capitalize my-1">Puma Shoes</p>
                <span class="fw-bold">$ 100</span>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3 p-2 game">
              <div class="collection-img position-relative">
                <img src={image5} class="w-100" alt="Monitor" />
                <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div class="text-center">
                <div class="rating mt-3">
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-capitalize my-1">Gaming Monitor</p>
                <span class="fw-bold">$ 150</span>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3 p-2 game">
              <div class="collection-img position-relative">
                <img src={image6} class="w-100" alt="Gaming Console" />
                <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div class="text-center">
                <div class="rating mt-3">
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-capitalize my-1">Gaming Console</p>
                <span class="fw-bold">$ 449</span>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3 p-2 shoe">
              <div class="collection-img position-relative">
                <img src={image7} class="w-100" alt="Shoe" />
                <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div class="text-center">
                <div class="rating mt-3">
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-capitalize my-1">Adidas sportshoe</p>
                <span class="fw-bold">$ 69</span>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3 p-2 shoe">
              <div class="collection-img position-relative">
                <img src={image8} class="w-100" alt="Shoe" />
                <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div class="text-center">
                <div class="rating mt-3">
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-capitalize my-1">Nike running shoes</p>
                <span class="fw-bold">$ 130</span>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 p-2 mob">
              <div class="collection-img position-relative">
                <img src={image9} class="w-100" alt="Phone" />
                <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div class="text-center">
                <div class="rating mt-3">
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-capitalize my-1">Realme 11pro+</p>
                <span class="fw-bold">$ 250</span>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 p-2 game">
              <div class="collection-img position-relative">
                <img src={image10} class="w-100" alt="macbook" />
                <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div class="text-center">
                <div class="rating mt-3">
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-capitalize my-1">MAC Book Air M2</p>
                <span class="fw-bold">$1299 </span>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 p-2 game">
              <div class="collection-img position-relative">
                <img src={image11} class="w-100" alt="chromebook" />
                <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div class="text-center">
                <div class="rating mt-3">
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-capitalize my-1">Chromebook</p>
                <span class="fw-bold">$ 160</span>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 p-2 mob">
              <div class="collection-img position-relative">
                <img src={image12} class="w-10" alt="Phone" />
                <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div class="text-center">
                <div class="rating mt-3">
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="text-primary">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-capitalize my-1">Motorola Edge 40</p>
                <span class="fw-bold">$ 800</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><BestBudgetItems/></div>
  );
};

export default Collection;
