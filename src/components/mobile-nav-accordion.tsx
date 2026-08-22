import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { isExternalNavLink, navGroups } from './nav-links';

export function MobileNavAccordion() {
  return (
    <Accordion>
      {navGroups.map((group) => (
        <AccordionItem key={group.label} value={group.label}>
          <AccordionTrigger>{group.label}</AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-3">
              {group.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target={isExternalNavLink(item.href) ? '_blank' : undefined}
                    rel={
                      isExternalNavLink(item.href)
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="text-sm text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
