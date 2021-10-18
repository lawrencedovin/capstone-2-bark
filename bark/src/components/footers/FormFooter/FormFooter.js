import React from 'react';

const FormFooter = () => (
  <div data-testid="FormFooter">
    <div class="row no-gutters footer footer--forms">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 d-flex justify-content-between">
                    <span class="footer__text footer__made-with--forms">
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
);

export default FormFooter;
