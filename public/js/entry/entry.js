class BaseEntry {
  constructor(props) {
  }

  validate() {
    const data = this.data();
    return  <p class="validation-error">こちらは回答必須です。</p>
  }

  required() {
    return  <span class="required">※</span>
  }

  data() {
    return { text: "abc" }
  }

  hide() {
    this.state.show = false;
  }

  show() {

  }

  preview() {
    const data = this.data();
  }

  change() {

  }

  _render() {
    return (
      <div></div>
    )
  };


  render() {
    return (
      <div class="entry-warp">
        <div class="entry-title">
          <div>${props.title}</div>

          ${this.required()}

        </div>
        <div class="title-description">${props.title_description}</div>
        <div class="entry-input">
          ${this._render()}
        </div>
        <div class="entry-description">${props.description}
        </div>
        ${this.validate()}
      </div>
    )
  }
}

module.exports = { BaseEntry }
