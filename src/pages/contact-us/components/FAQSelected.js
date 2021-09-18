import ArrowDown from "../../images/arrow_down.svg";
import ArrowRight from "../../images/arrow-right.svg";
import Alert from "../../images/alert-circle.svg";

const FaqSelected = () => {
  return (
    <div className="FAQselected">
      <div className="changeTopic">
        <p>Topic</p>
        <p>Change</p>
      </div>

      <button className="notify">Notification</button>

      <p>Related Questions</p>

      <div className="dropDownAnswers">
        <details>
          <summary>
            <p>How do notifications work?</p>
            <img src={ArrowDown} alt="Arrow Down" />
          </summary>

          <div className="summaryContent">
            Notifications in Slack keep you informed about work you care about.
            You can configure your notifications to adjust which messages you’ll
            be notified of. To keep up with activity while you’re on the move,
            you’ll receive notifications on your mobile device when you’re
            inactive on your desktop.
          </div>
        </details>

        <details>
          <summary>
            <p>How do notifications work?</p>
            <img src={ArrowDown} alt="Arrow Down" />
          </summary>

          <div className="summaryContent">
            Notifications in Slack keep you informed about work you care about.
            You can configure your notifications to adjust which messages you’ll
            be notified of. To keep up with activity while you’re on the move,
            you’ll receive notifications on your mobile device when you’re
            inactive on your desktop.
          </div>
        </details>

        <details>
          <summary>
            <p>How do notifications work?</p>
            <img src={ArrowDown} alt="Arrow Down" />
          </summary>

          <div className="summaryContent">
            Notifications in Slack keep you informed about work you care about.
            You can configure your notifications to adjust which messages you’ll
            be notified of. To keep up with activity while you’re on the move,
            you’ll receive notifications on your mobile device when you’re
            inactive on your desktop.
          </div>
        </details>

        <details>
          <summary>
            <p>How do notifications work?</p>
            <img src={ArrowDown} alt="Arrow Down" />
          </summary>

          <div className="summaryContent">
            Notifications in Slack keep you informed about work you care about.
            You can configure your notifications to adjust which messages you’ll
            be notified of. To keep up with activity while you’re on the move,
            you’ll receive notifications on your mobile device when you’re
            inactive on your desktop.
          </div>
        </details>
      </div>

      <p>Related Articles</p>

      <div className="NotificationConfig">
        <p>Configure your Zuri notifications</p>
        <img src={ArrowRight} alt="arrow right" />
      </div>
      <div className="NotificationConfig">
        <p>Configure your Zuri notifications</p>
        <img src={ArrowRight} alt="arrow right" />
      </div>
      <div className="NotificationConfig">
        <p>Configure your Zuri notifications</p>
        <img src={ArrowRight} alt="arrow right" />
      </div>

      <p>Can you give us more details?</p>

      <textarea
        name="text"
        className="moreInfo"
        maxLength="500"
        placeholder="Add any additional information we can use
      to help you."
        rows="5"
      ></textarea>

      <p>Attach Files (optional)</p>

      <div className="dragDropArea">
        <p>Drag and drop a file to attach it, or</p>
        <a href="/">browse for a file</a>
      </div>

      <div className="buttonChatDiv">
        <button className="transmit">SEND US A MESSAGE</button>
        <div>
          <p>CHAT UNAVAILABLE</p>
          <img src={Alert} alt="alert circle" />
        </div>
      </div>

      <p>Privacy Policy</p>
    </div>
  );
};

export default FaqSelected;
