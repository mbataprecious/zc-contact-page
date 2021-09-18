const FaqSelector = () => {
    return (
      <div className="FAQselector">
        <p>Select a topic:</p>
  
        <div className="allFAQs">
          <div>Adding or Removing Users</div>
          <div>Billings and plans</div>
          <div>Connection trouble</div>
          <div>Notifications</div>
          <div>Managing Chanels</div>
          <div>Signing in</div>
          <div>New design feedback</div>
          <div>Trial of paid plan</div>
        </div>
  
        <p>Or tell us what you need help with:</p>
  
        <input type="text" placeholder="Enter any topic" />
  
        <button type="submit">GET HELP</button>
  
        <p>Privacy Policy</p>
      </div>
    );
  };
  
  export default FaqSelector;
  