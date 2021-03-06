import React from 'react';

const MainFooter = () => (
  <div data-testid="MainFooter">
    <div class="footer-fix"></div>
    <div class="footer-container">
        <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 d-flex justify-content-end">
                  <a href="#" class="footer__button">
                      <img src={`/${process.env.PUBLIC_URL}icons/top-icon.svg`} alt="" class="footer__button-icon" id="footerButtonIcon" />
                  </a>
              </div>
            </div>
        </div>
        
        <div class="row no-gutters footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-between">
                        <span class="footer__text footer__made-with">
                            Made with 
                            <i class="fas fa-heart footer__icon"></i> 
                            and 
                            <i class="fas fa-pizza-slice footer__icon"></i> 
                        </span>
                        <span class="footer__text footer__copyright">© 2021 Wonder Recipe</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
);

export default MainFooter;