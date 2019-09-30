import * as React from 'react';
import Head from 'next/head';
import Container from '../components/container';
import Wrapper from '../components/wrapper';
import Intro from '../components/intro';
import Stage from '../components/stage';
import OpenClose from '../components/open-close';
import Tray from '../components/tray';
import Card from '../components/card';
import data, {DisplayVal} from '../components/data';
import '../components/global.css';
import ColorMeta from '../components/color-meta';

interface IndexState {
  color: string;
  display?: DisplayVal;
}

export default function Index(): JSX.Element {
  const [state, setState] = React.useState<IndexState>({
    display: undefined,
    color: 'white',
  });

  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  function onToggle() {
    setIsOpen(prev => !prev);
  }

  function determineColor(idx: number): string {
    const red = [0, 3, 6, 9, 12, 15, 18];
    const yellow = [1, 4, 7, 10, 13, 16];
    const colors = ['#E05557', '#FFBA00', '#00B6F0'];
    return red.includes(idx)
      ? colors[0]
      : yellow.includes(idx)
      ? colors[1]
      : colors[2];
  }

  function updateCard(n: DisplayVal, color: string): void {
    setState({display: n, color});
  }

  return (
    <Container>
      <Head>
        <title>Fibonacci</title>
      </Head>
      <ColorMeta color={state.color} />
      <Wrapper open={isOpen}>
        {state.display === undefined ? (
          <Intro>Tap a Card Below</Intro>
        ) : (
          <Stage color={state.color} display={state.display}>
            {state.display}
          </Stage>
        )}
        <OpenClose open={isOpen} onClick={onToggle} />
      </Wrapper>
      {isOpen && (
        <Tray>
          {data.map((d, idx, _data) => {
            const color = determineColor(idx);
            return (
              <div key={idx} style={{display: 'inline-block'}}>
                <Card color={color} onTap={() => updateCard(d.value, color)}>
                  {d.display}
                </Card>
              </div>
            );
          })}
        </Tray>
      )}
    </Container>
  );
}
