// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelectorAll('.expandButton')[0];
    this.closeButton = domElement.querySelectorAll('.closeButton')[0];
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";
    this.closeButton.textContent = "X";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle())
    this.expandButton.addEventListener('dblclick', () => this.contractArticle())

    this.closeButton.addEventListener('click', () => this.closeArticle())
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    console.log("Clicking the span");
    TweenMax.to(this.domElement, .5, {className: "+=article-open"})
    this.expandButton.textContent = 'Double-Click to Collapse';
  }

  contractArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    console.log("Clicking the span");
    TweenMax.to(this.domElement, .5, {className: "-=article-open"});
    this.expandButton.textContent = 'Click to Expand';
  }

  closeArticle() {
    // this.domElement.style.display = 'none'
    TweenMax.to(this.domElement, .5, {display: 'none', opacity: 0})
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
articles.forEach(article => new Article(article))

