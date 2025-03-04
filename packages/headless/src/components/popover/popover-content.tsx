import {
  component$,
  Slot,
  useBrowserVisibleTask$,
  useContext,
  useSignal,
  useStylesScoped$,
} from '@builder.io/qwik';
import styles from './popover-content.css?inline';
import { PopoverContext } from './popover-context';

export const PopoverContent = component$(() => {
  const ref = useSignal<HTMLElement>();
  const contextService = useContext(PopoverContext);
  useStylesScoped$(styles);

  useBrowserVisibleTask$(() => {
    contextService.setOverlayRef$(ref);
  });

  return (
    <div ref={ref} class="popover-content">
      <Slot />
    </div>
  );
});
