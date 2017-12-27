export default class Tweet extends React.Component {
  render() {
    const { name, body, formattedDate, gravatar } = this.props;
    return (
      <li className="collection-item avatar">
        <img className="circle" src={gravatar} />
        <span className="title">{name}</span>
        <time>{formattedDate}</time>
        <p>{body}</p>
      </li>
    );
  }
}
