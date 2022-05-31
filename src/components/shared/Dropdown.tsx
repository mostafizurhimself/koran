import { useLayer } from 'react-laag';
import { ReactElement, useState } from 'react';
import classNames from 'classnames';

interface Props {
  children: ReactElement[];
  className?: string;
}

const Dropdown = ({ children, className }: Props) => {
  const [isOpen, setOpen] = useState(false);

  // helper function to close the menu
  function close() {
    setOpen(false);
  }

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen,
    onOutsideClick: close, // close the menu when the user clicks outside
    onDisappear: close, // close the menu when the menu gets scrolled out of sight
    overflowContainer: true, // keep the menu positioned inside the container
    auto: true, // automatically find the best placement
    placement: 'bottom-end', // we prefer to place the menu "top-end"
    triggerOffset: 12, // keep some distance to the trigger
    containerOffset: 16, // give the menu some room to breath relative to the container
    arrowOffset: 16, // let the arrow have some room to breath also
  });

  const trigger = children.find((el) => el.type === Trigger);
  const list = children.find((el) => el.type === List);

  // Again, we're using framer-motion for the transition effect
  return (
    <div className="dropdown">
      <button className="dropdown-trigger" {...triggerProps} onClick={() => setOpen(!isOpen)}>
        {trigger ? trigger.props.children : null}
      </button>
      {isOpen &&
        renderLayer(
          <div className={classNames(['dropdown-list', className])} {...layerProps}>
            {list ? list.props.children : null}
          </div>
        )}
    </div>
  );
};

interface TriggerProps {
  children?: string | ReactElement | ReactElement[];
}
const Trigger = ({ children }: TriggerProps) => {
  return <>{children}</>;
};

interface ListProps {
  children?: string | ReactElement | ReactElement[];
}
const List = ({ children }: ListProps) => {
  return <>{children}</>;
};

Dropdown.Trigger = Trigger;
Dropdown.List = List;

export default Dropdown;
