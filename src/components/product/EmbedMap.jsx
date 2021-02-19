import React, { Component } from "react";

class EmbedMap extends Component {
  render() {
    return (
      <div>
        <iframe
          title="company-map"
          className="emb-map"
          src={`https://www.google.com/maps?q=${this.props.address}&output=embed`}
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8578.3291904459!2d107.6481051114508!3d-6.945600883778878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3bfb9fb2c7588c7!2sSagara%20Technology!5e0!3m2!1sen!2sid!4v1600367552740!5m2!1sen!2sid"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    );
  }
}

export default EmbedMap;
