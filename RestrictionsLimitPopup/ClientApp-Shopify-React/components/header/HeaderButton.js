function ActionListWithHelpTextExample() {
    const [active, setActive] = useState(true);
  ​
    const toggleActive = useCallback(() => setActive((active) => !active), []);
  ​
    const activator = (
      <Button onClick={toggleActive} disclosure>
        More actions
      </Button>
    );
  ​
    return (
      <div style={{height: '250px'}}>
        <Popover active={active} activator={activator} onClose={toggleActive}>
          <ActionList
            sections={[
              {
                items: [
                  {
                    content: 'Blog posts',
                    helpText: 'Manage your blog articles',
                  },
                  {
                    content: 'Blogs',
                    helpText: 'Manage blogs published to your Online Store',
                  },
                ],
              },
            ]}
          />
        </Popover>
      </div>
    );
  }