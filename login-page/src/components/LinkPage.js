import React from 'react';
import './LinkPage.css';

const LinkPage = () => {
  return (
    <div>
      <div className="header">
        <h1>HDFS BANK</h1>
        <img src="banks.png" alt="WE SERVE FOR PEOPLE WELLNESS" align="left" width="200" height="100" />
      </div>

      <div className="topnav">
        <a href="/transactions">Transactions</a>
        <a href="/loan">Loan</a>
        <a href="/fund-details">Fund details</a>
        <a href="/credit-cards">Credit cards</a>
        <a href="/insurance">Insurance</a>
        <a href="/stock-details">Stock Details</a>
      </div>

      <section>
        <nav>
          <ul>
            <li><a href="/account-details">Account Details</a></li><br />
            <li><a href="/deposits">Deposits</a></li><br />
            <li><a href="/mutual-fund">Mutual Fund</a></li><br />
            <li><a href="/emi">EMI</a></li><br />
            <li><a href="/money-transfer">Money Transfer</a></li><br />
            <li><a href="/helpdesk">Helpdesk</a></li>
          </ul>
        </nav>
        <article>
          <h1>Description</h1>
          <form action="/submit">
            <label htmlFor="fname">First name:</label>
            <input type="text" id="fname" name="fname" defaultValue="John" /><br />
            <label htmlFor="lname">Last name:</label>
            <input type="text" id="lname" name="lname" defaultValue="Doe" /><br /><br />
            <input type="submit" value="Submit" />
          </form>
        </article>
      </section>
    </div>
  );
};

export default LinkPage;
