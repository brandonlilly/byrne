I'm collaborating with Michael Butler (again!) to make a successor to our
[Oreo Triggers](https://github.com/brandonlilly/oreo-triggers),
  now using ruby. There are a few key goals this time around:
- Intuitive math expressions e.g. `x << 2 * (y + 3)` over Oreo's equivalent:
  ```ruby
  temp.setTo(y)
  temp.add(3)
  x.productOf(temp, 2)
  ```
- Removed concept of "temp" counters and switches from the api. Instead this is automatically done for the user by inferring from how the variable is used whether it's meant to persist through each cycle. This should greatly reduce confusion and improper usage.
- Bounds inference. This will make efficient countoffs require minimal to no hand holding. Observe the effective bounds in this example:
  ```ruby
  x = Counter.new(0..50) # bounds: 0..50
  y = Counter.new(0..10) # bounds: 0..10
  if some_condition
    x << 7 # bounds: 7..7
    y << x + 5 # bounds: 12..12
  else
    y << x + 5 # bounds: 5..55
  end
  ```
- Native support for negative counter values. Behind the scenes we do this by shifting the origin to 2^31. Api-wise it's as simple as specifying negative bounds: `Counter.new(-100..100)`.
