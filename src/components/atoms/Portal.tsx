/**
 * @see https://github.com/zeit/next.js/blob/85769c3d3296cdcddc0fb36f05058c8e451ca57f/examples/with-portals/components/Portal.js
 */
import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  selector: string;
}

export class Portal extends React.Component<Props> {
  private element?: Element | null;

  componentDidMount(): void {
    this.element = document.querySelector(this.props.selector);
  }

  render(): React.ReactNode {
    if (this.element == null) {
      return null;
    }

    return ReactDOM.createPortal(this.props.children, this.element);
  }
}
