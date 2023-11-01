document.addEventListener("DOMContentLoaded", function() {

   const url = "https://www.randyconnolly.com/funwebdev/3rd/api/colors/sample-colors.php";
   
   fetch(url)
      .then(answer => answer.json())
      .then(colors => {
         let article = document.querySelector(`article`);

         for (let i = 0; i < colors.length; i++) {

            let h3 = document.createElement(`h3`);
            let section = document.createElement(`section`);
            let load = document.createElement(`div`);

            h3.innerText = colors[i].title;
            section.classList.add(`scheme`);
            load.classList.add(`preview`);

            for (let j = 0; j < colors[i].scheme.length; j++) {
               let boxOfColors = document.createElement(`div`);
               boxOfColors.classList = `color-box`;
               boxOfColors.style.backgroundColor = colors[i].scheme[j].web;
               load.appendChild(boxOfColors);
            }

            let actions = document.createElement(`div`);
            let button = document.createElement(`button`);
            
            actions.classList.add(`actions`);

            button.addEventListener(`click`, () => {
               let aside = document.querySelector(`aside`);
               let h2 = document.createElement(`h2`);
               let firstText = document.createTextNode(colors[i].title);
               let fieldset = document.createElement(`fieldset`);

               aside.innerHTML = '';
               h2.appendChild(firstText);

               for (let j = 0; j < colors[i].scheme.length; j++) {

                  let colorRow = document.createElement(`div`);
                  let details = document.createElement(`div`);
                  
                  let firstSpan = document.createElement(`span`);
                  let secondSpan = document.createElement(`span`);
                  let label = document.createElement(`label`);

                  colorRow.classList.add(`colorRow`);

                  details.classList.add(`detailBox`);
                  details.style.backgroundColor = colors[i].scheme[j].web;

                  SecondText = document.createTextNode(colors[i].scheme[j].web);
                  firstSpan.appendChild(SecondText);
                  ThirdText = document.createTextNode(`rgb(${colors[i].scheme[j].color.red}, ${colors[i].scheme[j].color.green}, ${colors[i].scheme[j].color.blue})`);
                  secondSpan.appendChild(ThirdText);
                  FourthText = document.createTextNode(colors[i].scheme[j].name);
                  label.appendChild(SecondText);

                  colorRow.appendChild(details);
                  colorRow.appendChild(firstSpan);
                  colorRow.appendChild(secondSpan);
                  colorRow.appendChild(label);

                  fieldset.appendChild(colorRow);
               }
               aside.appendChild(h2);
               aside.appendChild(fieldset);
            });

            button.setAttribute(`data-id`, colors[i].id);
            button.innerText = `View`;

            actions.appendChild(button);
            section.appendChild(load);
            section.appendChild(actions);
            article.appendChild(h3);
            article.appendChild(section);
         }
      });

});



 
