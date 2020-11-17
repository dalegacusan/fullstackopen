import React from "react";

export default function About() {
  return (
    <section class="bg-light">
      <div class="container section_container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2>About Phonebook</h2>
            <p class="lead">Phonebook allows you to Add a Contact, Search for a Contact, and Delete a Contact.</p>
            <ul>
              <li>Clickable nav links that smooth scroll to page sections</li>
              <li>Responsive behavior when clicking nav links perfect for a one page website</li>
              <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>
              <li>Minimal custom CSS so you are free to explore your own unique design options</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}