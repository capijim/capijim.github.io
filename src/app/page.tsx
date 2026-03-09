import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
  Icon,
} from "@once-ui-system/core";
import { home, about, person, social, baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="l" paddingTop="64" paddingBottom="32">
        <Column maxWidth="s" horizontal="center" align="center" gap="24">
          <RevealFx translateY="12" speed="slow" fillWidth horizontal="center">
            <Avatar
              src={person.avatar}
              size="xl"
            />
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center">
            <Heading wrap="balance" variant="display-strong-l" align="center">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.4} fillWidth horizontal="center">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="8" delay={0.6} horizontal="center">
            <Row gap="16" horizontal="center" paddingTop="12">
              {social
                .filter((item) => item.essential)
                .map((item) => (
                  <Button
                    key={item.name}
                    href={item.link}
                    variant="tertiary"
                    size="l"
                  >
                    <Icon name={item.icon} size="l" />
                  </Button>
                ))}
            </Row>
          </RevealFx>
          <RevealFx translateY="8" delay={0.8} horizontal="center">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              About
            </Button>
          </RevealFx>
        </Column>
      </Column>
    </Column>
  );
}
