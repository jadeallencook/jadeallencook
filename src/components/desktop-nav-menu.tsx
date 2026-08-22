import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import { isExternalNavLink, navGroups } from './nav-links';

export function DesktopNavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navGroups.map((group) => (
          <NavigationMenuItem key={group.label}>
            <NavigationMenuTrigger>{group.label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul
                className={
                  group.items.length > 4
                    ? 'grid w-72 grid-cols-2 gap-1'
                    : 'w-56'
                }
              >
                {group.items.map((item) => (
                  <li key={item.href}>
                    <NavigationMenuLink
                      href={item.href}
                      closeOnClick
                      target={isExternalNavLink(item.href) ? '_blank' : undefined}
                      rel={
                        isExternalNavLink(item.href)
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
